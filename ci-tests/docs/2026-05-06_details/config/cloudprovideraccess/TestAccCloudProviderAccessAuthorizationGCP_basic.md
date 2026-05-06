# config/cloudprovideraccess/TestAccCloudProviderAccessAuthorizationGCP_basic Test Details
# Found 35 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 34) FAIL
Success rate: 97.14%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-22 01:17](#error-2026-04-22t0117120000) | UNEXPECTED_ERROR /api/atlas/v2/groups/69e81a48a8d803e1612f2e49/cloudProviderAccess/GCP/69e81a54a8d803e1612fbe0f | dev | flaky_500 | 1202.04s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS a minute
- 2026-04-08 PASS a minute
- 2026-04-09 PASS a minute
- 2026-04-10 PASS a minute
- 2026-04-11 PASS a minute
- 2026-04-12: MISSING
- 2026-04-13 PASS a minute
- 2026-04-14 PASS a minute
- 2026-04-15 PASS a minute
- 2026-04-16 PASS a minute
- 2026-04-17 PASS a minute
- 2026-04-18 PASS a minute
- 2026-04-19: MISSING
- 2026-04-20 PASS a minute
- 2026-04-21 PASS a minute
- 2026-04-22

### Error 2026-04-22T01:17:12+00:00
```
2026-04-22T01:17:12.1184542Z === RUN   TestAccCloudProviderAccessAuthorizationGCP_basic
2026-04-22T01:17:12.1186993Z   diagnostic_summary=
2026-04-22T01:17:12.1195793Z    diagnostic_detail="" tf_proto_version=6.11 tf_rpc=ApplyResourceChange tf_req_id=7cb3557c-ea04-ef02-78ad-4f8d20e65933 tf_provider_addr=registry.terraform.io/hashicorp/mongodbatlas
2026-04-22T01:17:12.1212104Z   
2026-04-22T01:17:12.1213068Z     resource_cloud_provider_access_authorization_test.go:47: Step 1/1 error: Error running apply: exit status 1
2026-04-22T01:17:12.1214077Z         
2026-04-22T01:17:12.1215142Z         Error: timeout while waiting for state to become 'COMPLETE, FAILED' (last state: 'IN_PROGRESS', timeout: 20m0s)
2026-04-22T01:17:12.1217034Z         will run cleanup because delete_on_create_timeout is true. If you suspect a transient error, wait before retrying to allow resource deletion to finish
2026-04-22T01:17:12.1220473Z         cleanup failed: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e81a48a8d803e1612f2e49/cloudProviderAccess/GCP/69e81a54a8d803e1612fbe0f DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-22T01:17:12.1222370Z         
2026-04-22T01:17:12.1223075Z           with mongodbatlas_cloud_provider_access_setup.gcp_setup,
2026-04-22T01:17:12.1224525Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cloud_provider_access_setup" "gcp_setup":
2026-04-22T01:17:12.1225813Z           12: 	resource "mongodbatlas_cloud_provider_access_setup" "gcp_setup" {
2026-04-22T01:17:12.1226437Z         
2026-04-22T01:17:12.1226991Z --- FAIL: TestAccCloudProviderAccessAuthorizationGCP_basic (1202.35s)
```

- 2026-04-23 PASS a minute
- 2026-04-24 PASS a minute
- 2026-04-25 PASS a minute
- 2026-04-26: MISSING
- 2026-04-27 PASS a minute
- 2026-04-28 PASS a minute
- 2026-04-29 PASS a minute
- 2026-04-30 PASS a minute
- 2026-05-01 PASS a minute
- 2026-05-02 PASS a minute
- 2026-05-03: MISSING
- 2026-05-04 PASS a minute
- 2026-05-05 PASS a minute
- 2026-05-06 PASS a minute

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS a minute
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS a minute
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS a minute
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22
  - PASS a minute
  - PASS a minute
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS a minute
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS a minute
- 2026-05-04 PASS a minute
- 2026-05-05: MISSING
- 2026-05-06 PASS a minute
