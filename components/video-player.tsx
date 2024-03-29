/** @jsxRuntime classic */
/** @jsx jsx */
import { Link as A, jsx, IconButton } from "theme-ui";
import { useEffect, useRef, useCallback, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FiCopy, FiCheck } from "react-icons/fi";
import videojs from 'video.js';
import 'videojs-contrib-quality-levels';
import 'videojs-hls-quality-selector';

function fallbackCopyTextToClipboard(text) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.style.position = "fixed"; //avoid scrolling to bottom
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
}

function copyTextToClipboard(text) {
  if (!navigator.clipboard) {
    return fallbackCopyTextToClipboard(text);
  }
  navigator.clipboard.writeText(text);
}

export default function VideoPlayer({ src, poster }) {
  const router = useRouter();
  const [copied, setCopied] = useState(false);
  const [videoEl, setVideoEl] = useState(null);
  const onVideo = useCallback((el) => {
    setVideoEl(el);
  }, []);
async function getWalletAccessToken() {
    //Check if a user is logged in...
    let isAuthenticated = true;

    if (!isAuthenticated) {
        //No user is logged in, no wallet will be used
        return null;
    }

    //This API should check the user's auth 
    let body = await yourAPIRequestToGenerateThetaWalletAccessTokenForAuthedUser();

    //Return the access token from the request body
    return body.access_token;
}

  const optionalHlsOpts = null;
  useEffect(() => {
    if (videoEl == null) return;

    const player = video.player = videojs(videoEl, {
      techOrder: ["theta_hlsjs", "html5"],
          sources: [{
            type: "application/vnd.apple.mpegurl",
          }],
          theta_hlsjs: {
              userId: "YOUR_AUTHED_USER_ID",
              walletUrl: "wss://api-wallet-service.thetatoken.org/theta/ws",
              onWalletAccessToken: getWalletAccessToken,
              hlsOpts: optionalHlsOpts
          },
          html5: {
             hls: {
               overrideNative: true,
             }
         },
    });
    player.src({
      src: src,
      type: 'application/x-mpegURL'
    });
    player.hlsQualitySelector({
      displayCurrentQuality: true,
    });

    return () => {
      player.dispose();
    }
  }, [src, videoEl]);

  const handleCopy = useCallback(() => {
    copyTextToClipboard(`${window.location.origin}${router.asPath}`);
    setCopied(true);
  }, [router]);

  useEffect(() => {
    if (copied) {
      const timeout = setTimeout(() => setCopied(false), 5000);
      return () => clearTimeout(timeout);
    }
  }, [copied]);

  return (
    <script src="https://d1ktbyo67sh8fw.cloudfront.net/js/theta.umd.min.js"></script>
    <script src="https://d1ktbyo67sh8fw.cloudfront.net/js/theta-hls-plugin.umd.min.js"></script>
    <script src="https://d1ktbyo67sh8fw.cloudfront.net/js/videojs-theta-plugin.min.js"></script>

    <div
      sx={{ textAlign: "center", maxWidth: "100%", width: "100%", mx: "auto" }}
    >
      <div data-vjs-player>
        <video 
          ref={onVideo}
          className="video-js vjs-default-skin vjs-big-play-centered"
          playsInline
          controls
          poster={poster}
          sx={{
            borderRadius: "lg",
            width: "100%",
            "&:focus": { outline: "none" },
          }}
        />
      </div>
      <div
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mt: [3, 4],
        }}
      >
        <Link href={router.pathname} as={router.asPath} passHref>
          <A
            variant="accent"
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {window.location.origin}{router.asPath}
          </A>
        </Link>
        <IconButton
          sx={{ fontSize: 4, minWidth: "36px", ml: 2 }}
          onClick={handleCopy}
        >
          {copied ? <FiCheck /> : <FiCopy />}
        </IconButton>
        <Link
          href={
            "//twitter.com/intent/tweet?text=" +
            encodeURIComponent(
              "Uploaded a video to the decentralized web using file.video built by @buidllabs & @basementdot.\n\n" +
                window.location.origin +
                router.asPath +
                "\n\n#Web3 is here 🚀"
            )
          }
          passHref={true}
        >
          <a target="_blank">
            <img
              alt="Tweet"
              src="/twitter_all_white.png"
              width="38"
              height="38"
            />
          </a>
        </Link>
      </div>
    </div>
  );
}
