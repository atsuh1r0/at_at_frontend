import { FC } from "react"
import { useForm } from "react-hook-form"

type Props = {
  isModalOpened: boolean
  setIsModalOpened: React.Dispatch<React.SetStateAction<boolean>>
  setIsEntered: React.Dispatch<React.SetStateAction<boolean>>
  type: string
}

export const RecordStatusModal: FC<Props> = ({isModalOpened, setIsModalOpened, setIsEntered, type}: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const validationRules = {
    place: {
      required: {
        value: true,
        message: '入力が必須の項目です。',
      },
    },
    returnTime: {
      required: {
        value: true,
        message: '入力が必須の項目です。',
      },
    },
    status: {
      required: {
        value: true,
        message: '入力が必須の項目です。',
      },
    },
    comment: {
      required: {
        value: true,
        message: '入力が必須の項目です。',
      },
      maxLength: {
        value: 10,
        message: '10文字以内で入力してください。',
      },
    },
  }

  const buttonText = (): React.ReactNode => {
    switch (type) {
      case "create":
        return "入室"
      case "update":
        return "更新"
      default:
        return null;
    }
  }

  const onSubmit = (data: any) => {
    console.log(data)
    setIsEntered(isModalOpened)
    setIsModalOpened(!isModalOpened)
  };

  return (
    <>
      {isModalOpened &&
        <form className="fixed top-1/2 left-1/2 p-10 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-2xl shadow-gray-700/50 text-black rounded" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-5">
            <label htmlFor="place" className="block pl-1 mb-2 text-blue-500 font-bold">場所</label>
            <select id="place" {...register('place', validationRules.place)} className="p-3 w-64 bg-gray-100 rounded">
              <option value="1">ルーム</option>
              <option value="2">屋上</option>
              <option value="3">カフェ</option>
              <option value="4">コワーキング</option>
            </select>
            {errors.place?.message && <p className="mt-1 text-red-600 text-sm">{errors.place.message.toString()}</p>}
          </div>
          <div className="mb-5">
            <label htmlFor="returnTime" className="block pl-1 mb-2 text-blue-500 font-bold">帰宅予定</label>
            <input id="returnTime" {...register('returnTime', validationRules.returnTime)} type="time" className="p-3 w-64 bg-gray-100 rounded" />
            {errors.returnTime?.message && <p className="mt-1 text-red-600 text-sm">{errors.returnTime.message.toString()}</p>}
          </div>
          <div className="mb-5">
            <label htmlFor="status" className="block pl-1 mb-2 text-blue-500 font-bold">ステータス</label>
            <select  id="status" {...register('status', validationRules.status)} className="p-3 w-64 bg-gray-100 rounded">
              <option value="1">作業中</option>
              <option value="2">外出中</option>
              <option value="3">フリー</option>
            </select>
            {errors.status?.message && <p className="mt-1 text-red-600 text-sm">{errors.status.message.toString()}</p>}
          </div>
          <div className="mb-5">
            <label htmlFor="comment" className="block pl-1 mb-2 text-blue-500 font-bold">
              一言
              <span className="ml-2 text-gray-500 text-xs">※10文字以内</span>
            </label>
            <input id="comment" {...register('comment', validationRules.comment)} type="text" className="p-3 w-64 bg-gray-100 rounded" maxLength={10} />
            {errors.comment?.message && <p className="mt-1 text-red-600 text-sm">{errors.comment.message.toString()}</p>}
          </div>
          <div className="flex mt-10 justify-end">
            <button type="submit" className="py-3 px-8 bg-blue-400 text-white rounded">{buttonText()}</button>
          </div>
        </form>
      }
    </>
  )
}