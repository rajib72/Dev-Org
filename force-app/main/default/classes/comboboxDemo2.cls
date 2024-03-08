public class comboboxDemo2 {
	@AuraEnabled
    public static List<Account> getAccounts() {
        List<Account> accList=[Select Id,Name From Account];
        return accList;
    }
}