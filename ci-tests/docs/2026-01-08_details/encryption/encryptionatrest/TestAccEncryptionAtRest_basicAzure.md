# encryption/encryptionatrest/TestAccEncryptionAtRest_basicAzure Test Details
# Found 32 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 28) FAIL(x 4)
Success rate: 87.50%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-12-10 00:33](#error-2025-12-10t0033430000) |  | dev | 0.05s
[2025-12-10 17:18](#error-2025-12-10t1718350000) |  | dev | 0.04s
[2025-12-11 00:32](#error-2025-12-11t0032500000) |  | dev | 0.04s
[2025-12-11 08:53](#error-2025-12-11t0853470000) |  | dev | 3.06s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - FAIL a moment

### Error 2025-12-10T00:33:43+00:00
```
2025-12-10T00:33:43.1924990Z === RUN   TestAccEncryptionAtRest_basicAzure
2025-12-10T00:33:43.1937360Z    test_terraform_path=/home/runner/work/_temp/700fae1a-aa83-4799-8d31-4900139197ca/terraform test_name=TestAccEncryptionAtRest_basicAzure test_working_directory=/tmp/plugintest3621388875
2025-12-10T00:33:43.1938351Z     resource_test.go:122: Step 1/3 error: Error running apply: exit status 1
2025-12-10T00:33:43.1938738Z         
2025-12-10T00:33:43.1939178Z         Error: error creating Encryption At Rest: 6938bf81342a5d087f20c6a5
2025-12-10T00:33:43.1939553Z         
2025-12-10T00:33:43.1939917Z           with mongodbatlas_encryption_at_rest.test,
2025-12-10T00:33:43.1941008Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_encryption_at_rest" "test":
2025-12-10T00:33:43.1941722Z           12: 		resource "mongodbatlas_encryption_at_rest" "test" {
2025-12-10T00:33:43.1942074Z         
2025-12-10T00:33:43.1942674Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6938bf81342a5d087f20c6a5/encryptionAtRest
2025-12-10T00:33:43.1943292Z         PATCH: HTTP 400 Bad Request (Error code:
2025-12-10T00:33:43.1943837Z         "AZURE_KEY_VAULT_CREDENTIALS_DEPRECATED") Detail: Credentials based
2025-12-10T00:33:43.1944486Z         authentication is no longer supported for Azure Key Vault. Reason: Bad
2025-12-10T00:33:43.1944999Z         Request. Params: [], BadRequestDetail: 
2025-12-10T00:33:43.1945384Z --- FAIL: TestAccEncryptionAtRest_basicAzure (0.52s)
```

  - FAIL a moment

### Error 2025-12-10T17:18:35+00:00
```
2025-12-10T17:18:35.7215537Z === RUN   TestAccEncryptionAtRest_basicAzure
2025-12-10T17:18:35.7228490Z   
2025-12-10T17:18:35.7228884Z     resource_test.go:122: Step 1/3 error: Error running apply: exit status 1
2025-12-10T17:18:35.7229266Z         
2025-12-10T17:18:35.7229693Z         Error: error creating Encryption At Rest: 6939aadeb3f5ba295af898c6
2025-12-10T17:18:35.7230069Z         
2025-12-10T17:18:35.7230425Z           with mongodbatlas_encryption_at_rest.test,
2025-12-10T17:18:35.7231095Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_encryption_at_rest" "test":
2025-12-10T17:18:35.7231724Z           12: 		resource "mongodbatlas_encryption_at_rest" "test" {
2025-12-10T17:18:35.7232210Z         
2025-12-10T17:18:35.7232776Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6939aadeb3f5ba295af898c6/encryptionAtRest
2025-12-10T17:18:35.7233365Z         PATCH: HTTP 400 Bad Request (Error code:
2025-12-10T17:18:35.7233900Z         "AZURE_KEY_VAULT_CREDENTIALS_DEPRECATED") Detail: Credentials based
2025-12-10T17:18:35.7234519Z         authentication is no longer supported for Azure Key Vault. Reason: Bad
2025-12-10T17:18:35.7235012Z         Request. Params: [], BadRequestDetail: 
2025-12-10T17:18:35.7235398Z --- FAIL: TestAccEncryptionAtRest_basicAzure (0.37s)
```

- 2025-12-11
  - FAIL a moment

### Error 2025-12-11T00:32:50+00:00
```
2025-12-11T00:32:50.6825491Z === RUN   TestAccEncryptionAtRest_basicAzure
2025-12-11T00:32:50.6845493Z    test_terraform_path=/home/runner/work/_temp/c15819ee-5218-46a8-a607-bd18a57cf4ba/terraform test_working_directory=/tmp/plugintest3644954394 test_name=TestAccEncryptionAtRest_basicAzure test_step_number=1
2025-12-11T00:32:50.6847326Z     resource_test.go:122: Step 1/3 error: Error running apply: exit status 1
2025-12-11T00:32:50.6848124Z         
2025-12-11T00:32:50.6848721Z         Error: error creating Encryption At Rest: 693a10d77e40834017546658
2025-12-11T00:32:50.6849110Z         
2025-12-11T00:32:50.6849486Z           with mongodbatlas_encryption_at_rest.test,
2025-12-11T00:32:50.6850197Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_encryption_at_rest" "test":
2025-12-11T00:32:50.6850855Z           12: 		resource "mongodbatlas_encryption_at_rest" "test" {
2025-12-11T00:32:50.6851207Z         
2025-12-11T00:32:50.6851805Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/693a10d77e40834017546658/encryptionAtRest
2025-12-11T00:32:50.6852412Z         PATCH: HTTP 400 Bad Request (Error code:
2025-12-11T00:32:50.6852961Z         "AZURE_KEY_VAULT_CREDENTIALS_DEPRECATED") Detail: Credentials based
2025-12-11T00:32:50.6853606Z         authentication is no longer supported for Azure Key Vault. Reason: Bad
2025-12-11T00:32:50.6854115Z         Request. Params: [], BadRequestDetail: 
2025-12-11T00:32:50.6854494Z --- FAIL: TestAccEncryptionAtRest_basicAzure (0.45s)
```

  - FAIL 3 seconds

### Error 2025-12-11T08:53:47+00:00
```
2025-12-11T08:53:47.1784680Z === RUN   TestAccEncryptionAtRest_basicAzure
2025-12-11T08:53:47.1785839Z     resource_test.go:89: Creating execution project: test-acc-tf-p-6972902638818694073
2025-12-11T08:53:47.1801065Z    test_step_number=1 test_name=TestAccEncryptionAtRest_basicAzure test_terraform_path=/home/runner/work/_temp/e7d6a42d-7826-4969-b616-59d8a0dc4304/terraform
2025-12-11T08:53:47.1801973Z     resource_test.go:122: Step 1/3 error: Error running apply: exit status 1
2025-12-11T08:53:47.1802379Z         
2025-12-11T08:53:47.1803411Z         Error: error creating Encryption At Rest: 693a8697fd217f3ecd957527
2025-12-11T08:53:47.1803815Z         
2025-12-11T08:53:47.1804181Z           with mongodbatlas_encryption_at_rest.test,
2025-12-11T08:53:47.1804866Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_encryption_at_rest" "test":
2025-12-11T08:53:47.1805506Z           12: 		resource "mongodbatlas_encryption_at_rest" "test" {
2025-12-11T08:53:47.1805854Z         
2025-12-11T08:53:47.1806439Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/693a8697fd217f3ecd957527/encryptionAtRest
2025-12-11T08:53:47.1807035Z         PATCH: HTTP 400 Bad Request (Error code:
2025-12-11T08:53:47.1807569Z         "AZURE_KEY_VAULT_CREDENTIALS_DEPRECATED") Detail: Credentials based
2025-12-11T08:53:47.1808233Z         authentication is no longer supported for Azure Key Vault. Reason: Bad
2025-12-11T08:53:47.1808747Z         Request. Params: [], BadRequestDetail: 
2025-12-11T08:53:47.1809121Z --- FAIL: TestAccEncryptionAtRest_basicAzure (3.62s)
```

- 2025-12-12 PASS 7 seconds
- 2025-12-13 PASS 5 seconds
- 2025-12-14: MISSING
- 2025-12-15 PASS 7 seconds
- 2025-12-16 PASS 8 seconds
- 2025-12-17 PASS 7 seconds
- 2025-12-18 PASS 5 seconds
- 2025-12-19 PASS 6 seconds
- 2025-12-20 PASS 6 seconds
- 2025-12-21: MISSING
- 2025-12-22 PASS 7 seconds
- 2025-12-23 PASS 7 seconds
- 2025-12-24 PASS 8 seconds
- 2025-12-25 PASS 6 seconds
- 2025-12-26 PASS 5 seconds
- 2025-12-27 PASS 7 seconds
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 6 seconds
- 2025-12-31 PASS 5 seconds
- 2026-01-01 PASS 7 seconds
- 2026-01-02 PASS 7 seconds
- 2026-01-03 PASS 7 seconds
- 2026-01-04: MISSING
- 2026-01-05 PASS 4 seconds
- 2026-01-06 PASS 8 seconds
- 2026-01-07 PASS 5 seconds
- 2026-01-08 PASS 7 seconds

## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 6 seconds
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 6 seconds
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 4 seconds
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 5 seconds
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 6 seconds
