# encryption/encryptionatrestprivateendpoint/TestAccEncryptionAtRestPrivateEndpoint_Azure_basic Test Details
# Found 40 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 39) FAIL
Success rate: 97.50%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-01 01:10](#error-2025-09-01t0110370000) |  | dev | timeout | 1203.04s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 3 minutes
- 2025-08-07 PASS 4 minutes
- 2025-08-08 PASS 3 minutes
- 2025-08-09 PASS 3 minutes
- 2025-08-10 PASS 3 minutes
- 2025-08-11 PASS 4 minutes
- 2025-08-12 PASS 4 minutes
- 2025-08-13 PASS 3 minutes
- 2025-08-14 PASS 4 minutes
- 2025-08-15 PASS 3 minutes
- 2025-08-16 PASS 3 minutes
- 2025-08-17 PASS 3 minutes
- 2025-08-18 PASS 3 minutes
- 2025-08-19 PASS 4 minutes
- 2025-08-20
  - PASS 3 minutes
  - PASS 3 minutes
- 2025-08-21 PASS 3 minutes
- 2025-08-22 PASS 3 minutes
- 2025-08-23 PASS 3 minutes
- 2025-08-24 PASS 3 minutes
- 2025-08-25 PASS 5 minutes
- 2025-08-26 PASS 4 minutes
- 2025-08-27 PASS 4 minutes
- 2025-08-28 PASS 3 minutes
- 2025-08-29
  - PASS 42 minutes
  - PASS 3 minutes
  - PASS 3 minutes
- 2025-08-30 PASS 3 minutes
- 2025-08-31 PASS 3 minutes
- 2025-09-01
  - FAIL 20 minutes

### Error 2025-09-01T01:10:37+00:00
```
2025-09-01T01:10:37.5647230Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_Azure_basic
2025-09-01T01:10:37.5658755Z    test_step_number=2 test_working_directory=/tmp/plugintest1778976623 test_name=TestAccEncryptionAtRestPrivateEndpoint_Azure_basic
2025-09-01T01:10:37.5659692Z     resource_test.go:32: Step 2/3 error: Error running apply: exit status 1
2025-09-01T01:10:37.5660304Z         
2025-09-01T01:10:37.5660735Z         Error: error when waiting for status transition in creation
2025-09-01T01:10:37.5661101Z         
2025-09-01T01:10:37.5661684Z           with mongodbatlas_encryption_at_rest_private_endpoint.test,
2025-09-01T01:10:37.5662518Z           on terraform_plugin_test.tf line 33, in resource "mongodbatlas_encryption_at_rest_private_endpoint" "test":
2025-09-01T01:10:37.5663300Z           33: 		resource "mongodbatlas_encryption_at_rest_private_endpoint" "test" {
2025-09-01T01:10:37.5663713Z         
2025-09-01T01:10:37.5664331Z         timeout while waiting for state to become 'PENDING_ACCEPTANCE, ACTIVE,
2025-09-01T01:10:37.5664895Z         FAILED' (last state: 'INITIATING', timeout: 20m0s)
2025-09-01T01:10:37.5676998Z    test_name=TestAccEncryptionAtRestPrivateEndpoint_Azure_basic test_terraform_path=/home/runner/work/_temp/a4fd9837-42d4-4c26-8fc7-ac4d07bf2a14/terraform test_step_number=2 test_working_directory=/tmp/plugintest1778976623
2025-09-01T01:10:37.5678197Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-09-01T01:10:37.5678677Z         
2025-09-01T01:10:37.5679008Z         Error: error when destroying resource
2025-09-01T01:10:37.5679321Z         
2025-09-01T01:10:37.5679752Z         error deleting Encryption At Rest: (66d83bcc1fe1835125c52422):
2025-09-01T01:10:37.5680617Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/66d83bcc1fe1835125c52422/encryptionAtRest
2025-09-01T01:10:37.5681219Z         PATCH: HTTP 400 Bad Request (Error code:
2025-09-01T01:10:37.5681765Z         "CANNOT_DISABLE_ENCRYPTION_AT_REST_DUE_TO_PRIVATE_ENDPOINTS") Detail:
2025-09-01T01:10:37.5682415Z         Encryption at Rest cannot be disabled when private endpoints are present.
2025-09-01T01:10:37.5682977Z         Reason: Bad Request. Params: [], BadRequestDetail: 
2025-09-01T01:10:37.5683464Z --- FAIL: TestAccEncryptionAtRestPrivateEndpoint_Azure_basic (1203.43s)
```

  - PASS 6 minutes
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 3 minutes
- 2025-09-02 PASS 3 minutes
- 2025-09-03 PASS 3 minutes
- 2025-09-04 PASS 3 minutes