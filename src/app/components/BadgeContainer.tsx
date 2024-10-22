import React from "react";
import { Badge } from "@/components/ui/badge";

const BadgeContainer = () => {
    const badgeData: String[] = ["badge1", "badge2", "badge3", "badge4"];
    return (
        <>
            <div className="flex justify-center gap-x-8">
                {badgeData.map((item, idx) => (
                    <Badge variant={"secondary"} id={idx.toString()}>
                        {item}
                    </Badge>
                ))}
            </div>
        </>
    );
};

export default BadgeContainer;
