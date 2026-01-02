# encryption/encryptionatrestprivateendpoint/TestAccEncryptionAtRestPrivateEndpoint_AWS_basic Test Details
# Found 31 TestRuns in dev, qa from 2025-12-04 to 2026-01-02 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-12-25 00:36](#error-2025-12-25t0036110000) | CANNOT_ASSUME_ROLE /api/atlas/v2/groups/694c85bf13d1827bb5c41bdf/cloudProviderAccess/694c86b813d1827bb5c5bc35 | dev | flaky_500 | 74.03s

### Timeline
- 2025-12-03: MISSING
- 2025-12-04 PASS 6 minutes
- 2025-12-05 PASS 6 minutes
- 2025-12-06 PASS 6 minutes
- 2025-12-07: MISSING
- 2025-12-08 PASS 5 minutes
- 2025-12-09 PASS 5 minutes
- 2025-12-10
  - PASS 5 minutes
  - PASS 6 minutes
- 2025-12-11 PASS 5 minutes
- 2025-12-12 PASS 5 minutes
- 2025-12-13 PASS 5 minutes
- 2025-12-14: MISSING
- 2025-12-15 PASS 5 minutes
- 2025-12-16 PASS 5 minutes
- 2025-12-17 PASS 4 minutes
- 2025-12-18 PASS 6 minutes
- 2025-12-19 PASS 5 minutes
- 2025-12-20 PASS 5 minutes
- 2025-12-21: MISSING
- 2025-12-22 PASS 5 minutes
- 2025-12-23 PASS 5 minutes
- 2025-12-24 PASS 5 minutes
- 2025-12-25

### Error 2025-12-25T00:36:11+00:00
```
2025-12-25T00:36:11.7799847Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_AWS_basic
2025-12-25T00:36:11.7801921Z 2025/12/25 00:35:05 warning issue performing authorize: https://cloud-dev.mongodb.com/api/atlas/v2/groups/694c85bf13d1827bb5c41bdf/cloudProviderAccess/694c86b813d1827bb5c5bc35 PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-6552736051028472424). Reason: Bad Request. Params: [arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-6552736051028472424], BadRequestDetail:  
2025-12-25T00:36:11.7803708Z 2025/12/25 00:35:05 retrying
2025-12-25T00:36:11.7816394Z   
2025-12-25T00:36:11.7816813Z     resource_test.go:174: Step 2/3 error: Error running apply: exit status 1
2025-12-25T00:36:11.7817211Z         
2025-12-25T00:36:11.7817637Z         Error: error when waiting for status transition in creation
2025-12-25T00:36:11.7818005Z         
2025-12-25T00:36:11.7818455Z           with mongodbatlas_encryption_at_rest_private_endpoint.test,
2025-12-25T00:36:11.7819577Z           on terraform_plugin_test.tf line 94, in resource "mongodbatlas_encryption_at_rest_private_endpoint" "test":
2025-12-25T00:36:11.7820395Z           94: 		resource "mongodbatlas_encryption_at_rest_private_endpoint" "test" {
2025-12-25T00:36:11.7820805Z         
2025-12-25T00:36:11.7821039Z         Get
2025-12-25T00:36:11.7821935Z         "https://cloud-dev.mongodb.com/api/atlas/v2/groups/694c85bf13d1827bb5c41bdf/encryptionAtRest/AWS/privateEndpoints/694c86d313d1827bb5c5bda1":
2025-12-25T00:36:11.7822789Z         dial tcp: lookup cloud-dev.mongodb.com: i/o timeout
2025-12-25T00:36:11.7835193Z    test_name=TestAccEncryptionAtRestPrivateEndpoint_AWS_basic test_terraform_path=/home/runner/work/_temp/9b702ebb-6873-4b58-821e-43109f7c04f5/terraform test_working_directory=/tmp/plugintest3985002956
2025-12-25T00:36:11.7836331Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2025-12-25T00:36:11.7836794Z         
2025-12-25T00:36:11.7837120Z         Error: error when destroying resource
2025-12-25T00:36:11.7837436Z         
2025-12-25T00:36:11.7837867Z         error deleting Encryption At Rest: (694c85bf13d1827bb5c41bdf):
2025-12-25T00:36:11.7838615Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/694c85bf13d1827bb5c41bdf/encryptionAtRest
2025-12-25T00:36:11.7839338Z         PATCH: HTTP 400 Bad Request (Error code:
2025-12-25T00:36:11.7839894Z         "CANNOT_DISABLE_ENCRYPTION_AT_REST_DUE_TO_PRIVATE_ENDPOINTS") Detail:
2025-12-25T00:36:11.7840539Z         Encryption at Rest cannot be disabled when private endpoints are present.
2025-12-25T00:36:11.7841095Z         Reason: Bad Request. Params: [], BadRequestDetail: 
2025-12-25T00:36:11.7841564Z --- FAIL: TestAccEncryptionAtRestPrivateEndpoint_AWS_basic (74.32s)
```

- 2025-12-26 PASS 5 minutes
- 2025-12-27 PASS 5 minutes
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 5 minutes
- 2025-12-31 PASS 5 minutes
- 2026-01-01 PASS 4 minutes
- 2026-01-02 PASS 5 minutes

## QA Environment
### Timeline
- 2025-12-03: MISSING
- 2025-12-04: MISSING
- 2025-12-05: MISSING
- 2025-12-06: MISSING
- 2025-12-07 PASS 5 minutes
- 2025-12-08: MISSING
- 2025-12-09 PASS 6 minutes
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 6 minutes
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 4 minutes
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 5 minutes
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
