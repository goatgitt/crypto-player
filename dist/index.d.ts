declare module "theme-ui"
declare module "react"
declare module "react-icons/fi"
declare module "@sindresorhus/slugify"
export const jsx: typeof React.createElement

interface SxProps {
  sx: SystemStyleObject
}

type SxComponent = React.ComponentClass<SxProps>
