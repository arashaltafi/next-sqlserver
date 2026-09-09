type Props = {
    name: string;
};

const Avatar = ({ name }: Props) => {
    return (
        <div
            className="
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-xl
                bg-blue-50
                font-semibold
                text-blue-600
                dark:bg-blue-500/10
                dark:text-blue-400
            "
        >
            {name.charAt(0).toUpperCase()}
        </div>
    );
};

export default Avatar;