// "aa_bb_cc_dd_bb_e", search_text = "bb"

function solution(fullText, searchText){
  
  return String(fullText).split(searchText).length - 1
  
}

const full_text = "bbaa_bb_cc_dd_bb_e_bb", search_text = "bb";

solution(full_text, search_text)