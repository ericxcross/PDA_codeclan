def find_account_with_most_money(bank_accounts)
  richest_account_holder = bank_accounts[:users].max_by {|user| user[:account_balance]}
  return richest_account_holder
end

bank_info = {
  users: [
    {
      full_name: "Alexandra Armstrong",
      account_number: 193575849,
      pin: 1234,
      account_balance: 7164
    },
    {
      full_name: "Jerry Jones",
      account_number: 937461042,
      pin: 7465,
      account_balance: 462
    },
    {
      full_name: "Benjamin Braveheart",
      account_number: 546128498,
      pin: 8578,
      account_balance: 104837
    }
  ],
  admin: {
    cash_in_vault: 1000,
    vaul_pin: 8462,
  },
  name: "Eric's Royal Bank"
}

p find_account_with_most_money(bank_info)
