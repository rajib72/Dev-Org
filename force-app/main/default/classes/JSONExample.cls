public class JSONExample {
    public class PhaseData {
        public Integer id { get; set; }
        public String phaseName { get; set; }
        public String dependency { get; set; }
    }
    
    public static void createPhaseList() {
        List<PhaseData> phaseList = new List<PhaseData>();

        PhaseData phase1 = new PhaseData();
        phase1.id = 1;
        phase1.phaseName = 'Phase 1';
        phase1.dependency = 'Independent';
        phaseList.add(phase1);

        PhaseData phase2 = new PhaseData();
        phase2.id = 2;
        phase2.phaseName = 'Phase 2';
        phase2.dependency = 'Requirement';
        phaseList.add(phase2);

        PhaseData phase3 = new PhaseData();
        phase3.id = 3;
        phase3.phaseName = 'Phase 3';
        phase3.dependency = 'Requirement';
        phaseList.add(phase3);

        PhaseData phase4 = new PhaseData();
        phase4.id = 4;
        phase4.phaseName = 'Phase 4';
        phase4.dependency = 'Development';
        phaseList.add(phase4);
        
        Map<String,String> indMap = new Map<String,String>();
        Map<String,String> othMap = new Map<String,String>();

        for (PhaseData phase : phaseList) {
            System.debug('Phase Name: ' + phase.phaseName + ', Dependency: ' + phase.dependency);
            if(phase.dependency=='Independent'){
				indMap.put(phase.phaseName,phase.dependency);
            }
            else{
                othMap.put(phase.phaseName,phase.dependency);
            }
        }
        for (String phaseName : indMap.keySet()) {
            System.debug('Phase Name: ' + phaseName + ', Dependency: ' + indMap.get(phaseName));
        }
        for (String phaseName : othMap.keySet()) {
            System.debug('Phase Name: ' + phaseName + ', Dependency: ' + othMap.get(phaseName));
        }
    }
}