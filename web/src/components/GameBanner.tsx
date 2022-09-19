interface GameBannerProps {
	bannerUrl: string;
	title: string;
	adsCount: number;
}

export function GameBanner(GameBannerProps: any) {
	return (
		<a href="" className="relative rounded-lg overflow-hidden">
			<img src={GameBannerProps.bannerUrl} alt="game1Img" />
			<div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
				<strong className="font-bold text-white block">
					{GameBannerProps.title}
				</strong>
				<span className="text-zinc-300 text-sm block">
					{GameBannerProps.adsCount} ad(s)
				</span>
			</div>
		</a>
	);
}
