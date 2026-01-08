# ldap/ldapconfiguration/TestAccLDAPConfiguration_withVerify_CACertificateComplete Test Details
# Found 31 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:32](#error-2026-01-07t0032190000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da928af4f6cc389e792db/clusters/test-acc-tf-c-8199606383859564114 | dev | flaky_500 | 68.00s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 21 minutes
  - PASS 15 minutes
- 2025-12-11 PASS 20 minutes
- 2025-12-12 PASS 18 minutes
- 2025-12-13 PASS 19 minutes
- 2025-12-14: MISSING
- 2025-12-15 PASS 17 minutes
- 2025-12-16 PASS 14 minutes
- 2025-12-17 PASS 21 minutes
- 2025-12-18 PASS 21 minutes
- 2025-12-19 PASS 21 minutes
- 2025-12-20 PASS 17 minutes
- 2025-12-21: MISSING
- 2025-12-22 PASS 20 minutes
- 2025-12-23 PASS 18 minutes
- 2025-12-24 PASS 21 minutes
- 2025-12-25 PASS 30 minutes
- 2025-12-26 PASS 17 minutes
- 2025-12-27 PASS 17 minutes
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 19 minutes
- 2025-12-31 PASS 16 minutes
- 2026-01-01 PASS 17 minutes
- 2026-01-02 PASS 21 minutes
- 2026-01-03 PASS 18 minutes
- 2026-01-04: MISSING
- 2026-01-05 PASS 18 minutes
- 2026-01-06 PASS 19 minutes
- 2026-01-07

### Error 2026-01-07T00:32:19+00:00
```
2026-01-07T00:32:19.9898627Z === RUN   TestAccLDAPConfiguration_withVerify_CACertificateComplete
2026-01-07T00:32:19.9913332Z   
2026-01-07T00:32:19.9913874Z     resource_ldap_configuration_test.go:43: Step 1/1 error: Error running apply: exit status 1
2026-01-07T00:32:19.9914502Z         
2026-01-07T00:32:19.9914829Z         Error: Error in create
2026-01-07T00:32:19.9915143Z         
2026-01-07T00:32:19.9915573Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-01-07T00:32:19.9916357Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-01-07T00:32:19.9917091Z           13: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-01-07T00:32:19.9917501Z         
2026-01-07T00:32:19.9918040Z         cluster=test-acc-tf-c-8199606383859564114 didn't reach desired state: IDLE,
2026-01-07T00:32:19.9918518Z         error:
2026-01-07T00:32:19.9919299Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da928af4f6cc389e792db/clusters/test-acc-tf-c-8199606383859564114
2026-01-07T00:32:19.9920182Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-01-07T00:32:19.9920843Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-01-07T00:32:19.9921484Z         BadRequestDetail: 
2026-01-07T00:32:19.9921942Z --- FAIL: TestAccLDAPConfiguration_withVerify_CACertificateComplete (68.03s)
```

- 2026-01-08 PASS 17 minutes

## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 17 minutes
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 16 minutes
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 16 minutes
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 16 minutes
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 16 minutes
