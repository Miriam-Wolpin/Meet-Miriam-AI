import { User } from "lucide-react";
import avatar from "../../assets/avatar.png";

interface Props {
    role: "user" | "assistant";
}

export default function Avatar({ role }: Props) {

    if (role === "user") {
        return (
            <div
                className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-gradient-to-br
                    from-slate-700
                    to-slate-900
                    text-white
                    shadow-md
                "
            >
                <User size={18} />
            </div>
        );
    }

    return (

        <div className="relative shrink-0">

            <img
                src={avatar}
                alt="Miriam"
                className="
                    h-14
                    w-14
                    rounded-full
                    object-cover
                    ring-2
                    ring-white
                    shadow-lg
                    transition-transform
                    duration-300
                    hover:scale-105
                "
            />

            <span
                className="
                    absolute
                    bottom-0
                    right-0
                    h-4
                    w-4
                    rounded-full
                    border-2
                    border-white
                    bg-emerald-500
                "
            />

        </div>

    );

}