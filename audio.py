import os
import sys
from pydub import AudioSegment
sys.path.append('ffmpeg')

def match_target_amplitude(sound, target_dBFS):
    change_in_dBFS = target_dBFS - sound.dBFS
    return sound.apply_gain(change_in_dBFS)

input_path = r"/Users/xmly/github/download/music" #原始音频路径
# output_path = r"E:\out" #输出保存路径
filename = os.listdir(input_path) #遍历原始音频路径下所有文件名
for file in filename:
    path1 = input_path + "/" + file
    # path2 = output_path + "\\" + file
    sound = AudioSegment.from_file(path1, format="mp3")  # 加载WAV文件
    db = sound.dBFS  # 取得WAV文件的声音分贝值
    print(db)
    # normalized_sound = match_target_amplitude(sound, db + 10)  # db+10表示比原来的声音大10db,需要加大音量就加多少，反之则减多少
    # normalized_sound.export(path2, format="wav")