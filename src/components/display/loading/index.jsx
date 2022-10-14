import { ReactNode, Suspense } from "react";


export default function Loading(props) {
  const { element, fallback } = props;

  return <Suspense fallback={fallback || <>Chargement</>}>{element}</Suspense>;
}
