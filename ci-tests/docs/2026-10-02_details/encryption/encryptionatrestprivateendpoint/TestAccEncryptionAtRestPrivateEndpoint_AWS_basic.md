# encryption/encryptionatrestprivateendpoint/TestAccEncryptionAtRestPrivateEndpoint_AWS_basic Test Details
# Found 33 TestRuns in dev, qa from 2026-09-02 to 2026-10-02 from master branch: 1 unique tests, PASS(x 32) FAIL
Success rate: 96.97%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-10-02 00:53](#error-2026-10-02t0053260000) | API Error CANNOT_ASSUME_ROLE /api/atlas/v2/groups/{groupId}/cloudProviderAccess/{roleId} | dev | real_test_failure | 328.09s

### Timeline
- 2026-09-01: MISSING
- 2026-09-02 PASS 9 minutes
- 2026-09-03 PASS 6 minutes
- 2026-09-04
  - PASS 15 minutes
  - PASS 5 minutes
- 2026-09-05 PASS 5 minutes
- 2026-09-06: MISSING
- 2026-09-07 PASS 5 minutes
- 2026-09-08 PASS 5 minutes
- 2026-09-09 PASS 5 minutes
- 2026-09-10 PASS 5 minutes
- 2026-09-11 PASS 6 minutes
- 2026-09-12 PASS 5 minutes
- 2026-09-13: MISSING
- 2026-09-14 PASS 5 minutes
- 2026-09-15 PASS 6 minutes
- 2026-09-16 PASS 5 minutes
- 2026-09-17 PASS 5 minutes
- 2026-09-18 PASS 8 minutes
- 2026-09-19 PASS 5 minutes
- 2026-09-20: MISSING
- 2026-09-21 PASS 5 minutes
- 2026-09-22 PASS 5 minutes
- 2026-09-23 PASS 5 minutes
- 2026-09-24: MISSING
- 2026-09-25 PASS 7 minutes
- 2026-09-26 PASS 4 minutes
- 2026-09-27: MISSING
- 2026-09-28 PASS 4 minutes
- 2026-09-29 PASS 7 minutes
- 2026-09-30 PASS 4 minutes
- 2026-10-01 PASS 5 minutes
- 2026-10-02

### Error 2026-10-02T00:53:26+00:00
GoTestErrorClassification(error_class='real_test_failure',author='similar',run_id='2026-10-02T00:53:26.931000+00:00-TestAccEncryptionAtRestPrivateEndpoint_AWS_basic',confidence=1.0,ts_when='35 seconds ago')
API Error CANNOT_ASSUME_ROLE /api/atlas/v2/groups/{groupId}/cloudProviderAccess/{roleId}
```
2026-10-02T00:53:26.9316755Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_AWS_basic
2026-10-02T00:53:26.9317856Z 2026/10/02 00:48:04 warning issue performing authorize: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6abefe69ae91d8b90b2b51e2/cloudProviderAccess/6abeff439c970f1719f0eeee PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-3941187407084995322). Reason: Bad Request. Params: [arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-3941187407084995322], BadRequestDetail:  
2026-10-02T00:53:26.9318962Z 2026/10/02 00:48:04 retrying
2026-10-02T00:53:26.9325556Z    test_name=TestAccEncryptionAtRestPrivateEndpoint_AWS_basic test_terraform_path=/home/runner/work/_temp/448b541f-cb54-490c-8ac9-b1331a786516/terraform test_step_number=4 test_working_directory=/tmp/plugintest1069903258
2026-10-02T00:53:26.9326224Z     resource_test.go:174: Error running post-test destroy, there may be dangling resources: exit status 1
2026-10-02T00:53:26.9326503Z         
2026-10-02T00:53:26.9326698Z         Error: error when destroying resource
2026-10-02T00:53:26.9326879Z         
2026-10-02T00:53:26.9327127Z         error deleting Encryption At Rest: (6abefe69ae91d8b90b2b51e2):
2026-10-02T00:53:26.9327548Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6abefe69ae91d8b90b2b51e2/encryptionAtRest
2026-10-02T00:53:26.9327888Z         PATCH: HTTP 400 Bad Request (Error code:
2026-10-02T00:53:26.9328199Z         "CANNOT_DISABLE_ENCRYPTION_AT_REST_DUE_TO_PRIVATE_ENDPOINTS") Detail:
2026-10-02T00:53:26.9328568Z         Encryption at Rest cannot be disabled when private endpoints are present.
2026-10-02T00:53:26.9328889Z         Reason: Bad Request. Params: [], BadRequestDetail: 
2026-10-02T00:53:26.9329161Z --- FAIL: TestAccEncryptionAtRestPrivateEndpoint_AWS_basic (328.89s)
```


## QA Environment
### Timeline
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
- 2026-09-05: MISSING
- 2026-09-06 PASS 4 minutes
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 5 minutes
- 2026-09-14: MISSING
- 2026-09-15: MISSING
- 2026-09-16 PASS 5 minutes
- 2026-09-17: MISSING
- 2026-09-18: MISSING
- 2026-09-19: MISSING
- 2026-09-20 PASS 4 minutes
- 2026-09-21: MISSING
- 2026-09-22: MISSING
- 2026-09-23: MISSING
- 2026-09-24: MISSING
- 2026-09-25: MISSING
- 2026-09-26: MISSING
- 2026-09-27 PASS 5 minutes
- 2026-09-28: MISSING
- 2026-09-29 PASS 4 minutes
- 2026-09-30: MISSING
- 2026-10-01: MISSING
- 2026-10-02: MISSING
