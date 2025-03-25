import Image from "next/image"

interface TeamMemberProps {
  name: string
  title: string
  previousCompany: string
  image: string
}

export default function TeamMember({ name, title, previousCompany, image }: TeamMemberProps) {
  // Split name if it's too long
  const displayName =
    name.length > 20 ? name.split(" ").slice(0, 2).join(" ") + (name.split(" ").length > 2 ? "..." : "") : name

  return (
    <div className="flex flex-col items-center">
      <div className="bg-[#0084FF] rounded-lg p-1 mb-2 w-full max-w-[220px] aspect-square overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          width={220}
          height={220}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      <h3 className="text-xl font-bold text-center">{displayName}</h3>

      <p className="text-[#0084FF] text-sm text-center">{title}</p>

      <div className="flex items-center mt-2">
        <div className="text-xs text-gray-400 mr-2">EX —</div>
        {previousCompany && <div className="text-xs font-bold">{previousCompany}</div>}
      </div>
    </div>
  )
}

