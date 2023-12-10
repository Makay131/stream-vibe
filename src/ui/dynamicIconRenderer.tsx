import dynamic from 'next/dynamic';

type DynamicIconRendererProps = {
    svgName: string,
    twClass: string;
}

const importSvgComponent = (svgName: string) => {
    switch (svgName) {
      case 'bell':
        return dynamic(() => import('./icons/bell.tsx').then((module) => module.default));
      case 'search':
        return dynamic(() => import('./icons/search.tsx').then((module) => module.default));
      case 'menu':
        return dynamic(() => import('./icons/menu.tsx').then((module) => module.default));
      default:
        return dynamic(() => import('./icons/bell.tsx').then((module) => module.default));
    }
};

function DynamicIconRenderer({ svgName, twClass }: DynamicIconRendererProps) {
    const DynamicSvg = importSvgComponent(svgName);
    return (
          <DynamicSvg twClass={twClass} />
    );
  }
  
  export default DynamicIconRenderer;