import { useEthPrice, COURSE_PRICE } from '@components/hooks/useEthPrice'
import { Loader } from '@components/ui/common'
import Image from 'next/image'

export default function EthRates() {
  const { eth } = useEthPrice()

  return (
    <div className="flex flex-col xs:flex-row text-center">
      <div className="p-6 border drop-shadow rounded-md mr-2">
        <div className="flex items-center justify-center">
          {eth.data ? (
            <>
              <Image
                layout="fixed"
                height="30"
                width="30"
                src="/small-eth.webp"
                style={{ Position: 'relative', marginLeft: '50px' }}
              />

              <span className="text-xl font-bold" style={{ color: 'white' }}>
                = {eth.data}$
              </span>
            </>
          ) : (
            <div className="w-full flex justify-center">
              <Loader size="md" />
            </div>
          )}
        </div>
        <p className="text-lg " style={{ color: 'white' }}>
          Current BNB Price
        </p>
      </div>
      <div className="p-6 border drop-shadow rounded-md">
        <div className="flex items-center justify-center">
          {eth.data ? (
            <>
              <span className="text-xl font-bold" style={{ color: 'white' }}>
                {eth.perItem}
              </span>
              <Image
                layout="fixed"
                height="30"
                width="30"
                src="/small-eth.webp"
              />
              <span className="text-xl font-bold" style={{ color: 'white' }}>
                = {COURSE_PRICE}$
              </span>
            </>
          ) : (
            <div
              className="w-full flex justify-center"
              style={{ color: 'white' }}
            >
              <Loader size="md" />
            </div>
          )}
        </div>
        <p className="text-lg text-white-500" style={{ color: 'white' }}>
          Price por curso
        </p>
      </div>
    </div>
  )
}
