interface SliderItemProps {
  text?: string;
  image?: string;
}
function SliderItem({ image, text }: SliderItemProps) {
  return (
    <div className="h-full flex flex-col items-center justify-center font-poppins">
      {text ?? null}
      {image ? <img className="w-full object-cover" src={image} /> : null}
    </div>
  );
}

export default SliderItem;
