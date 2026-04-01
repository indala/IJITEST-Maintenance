import Image from "next/image";

import Head from "next/head";

export default function Maintenance() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100  ">
        <Head>
          <title>Maintenance</title>
          <meta name="description" content="Site under maintenance" />
          <meta name="robots" content="noindex, nofollow" />
        <link rel="icon" href="/favicon.ico" />
</Head>
        <Image src="/logo.png" alt="Logo" width={120} height={30} priority className=" mb-8" />
<h1 className="text-4xl font-bold text-gray-800  mb-4">Site is Under Maintenance</h1>
        <p className=" text-center text-gray-600 ">We&apos;re performing scheduled maintenance. Please check back later.</p>
      </div>
  );
}
