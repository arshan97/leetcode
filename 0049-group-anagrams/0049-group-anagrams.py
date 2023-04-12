class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        dic = {}
        
        for str in strs:
            key = ''.join(sorted(str))
            
            if key in dic:
                dic.get(key).append(str)
            else:
                dic[key] = [str]
        
        return dic.values()
                
        