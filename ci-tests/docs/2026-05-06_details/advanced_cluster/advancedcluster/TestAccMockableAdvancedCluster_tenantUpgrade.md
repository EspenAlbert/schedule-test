# advanced_cluster/advancedcluster/TestAccMockableAdvancedCluster_tenantUpgrade Test Details
# Found 33 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 32) FAIL
Success rate: 96.97%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-04-16 00:51](#error-2026-04-16t0051220000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/69e032838379397d109d0bb0/clusters/tenantUpgrade | dev | 128.01s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 48 minutes
- 2026-04-08 PASS 28 minutes
- 2026-04-09 PASS 47 minutes
- 2026-04-10 PASS 45 minutes
- 2026-04-11 PASS 20 minutes
- 2026-04-12: MISSING
- 2026-04-13 PASS 32 minutes
- 2026-04-14 PASS 22 minutes
- 2026-04-15 PASS 29 minutes
- 2026-04-16

### Error 2026-04-16T00:51:22+00:00
```
2026-04-16T00:51:22.2099612Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2026-04-16T00:51:23.5122796Z     resource_test.go:55: Adding variable groupId=69e032838379397d109d0bb0
2026-04-16T00:51:23.5123716Z     resource_test.go:55: Adding variable clusterName=test-acc-tf-c-5151262993130859187
2026-04-16T00:54:54.4249951Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2026-04-16T00:55:54.0191405Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2026-04-16T00:55:54.0192787Z     pre_check.go:46: Time before creating cluster: 2026-04-16T00:55:54.018808672Z, ProjectID: 69e032838379397d109d0bb0, Cluster name: test-acc-tf-c-5151262993130859187
2026-04-16T00:56:29.6188614Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2026-04-16T00:56:29.6189168Z     resource_test.go:55: Step 2/3 error: Error running apply: exit status 1
2026-04-16T00:56:29.6189580Z         
2026-04-16T00:56:29.6189853Z         Error: Error in tenant upgrade
2026-04-16T00:56:29.6190277Z         
2026-04-16T00:56:29.6190753Z           with mongodbatlas_advanced_cluster.test,
2026-04-16T00:56:29.6191446Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-04-16T00:56:29.6192086Z           12: 	resource "mongodbatlas_advanced_cluster" "test" {
2026-04-16T00:56:29.6192408Z         
2026-04-16T00:56:29.6193143Z         cluster name: test-acc-tf-c-5151262993130859187, API error details:
2026-04-16T00:56:29.6194155Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e032838379397d109d0bb0/clusters/tenantUpgrade
2026-04-16T00:56:29.6195092Z         POST: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail:
2026-04-16T00:56:29.6195701Z         Reason: No Capacity. Reason: Bad Request. Params: [No Capacity],
2026-04-16T00:56:29.6196124Z         BadRequestDetail: 
2026-04-16T00:57:00.7860789Z --- FAIL: TestAccMockableAdvancedCluster_tenantUpgrade (128.10s)
```

- 2026-04-17 PASS 27 minutes
- 2026-04-18 PASS 37 minutes
- 2026-04-19: MISSING
- 2026-04-20: MISSING
- 2026-04-21 PASS 34 minutes
- 2026-04-22 PASS 48 minutes
- 2026-04-23 PASS 42 minutes
- 2026-04-24 PASS 28 minutes
- 2026-04-25 PASS 24 minutes
- 2026-04-26: MISSING
- 2026-04-27 PASS 30 minutes
- 2026-04-28 PASS 30 minutes
- 2026-04-29 PASS 28 minutes
- 2026-04-30 PASS 45 minutes
- 2026-05-01 PASS 29 minutes
- 2026-05-02 PASS 23 minutes
- 2026-05-03: MISSING
- 2026-05-04 PASS 30 minutes
- 2026-05-05 PASS 58 minutes
- 2026-05-06 PASS an hour

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08
  - PASS 25 minutes
  - PASS 19 minutes
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 23 minutes
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19: MISSING
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 24 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 30 minutes
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 25 minutes
- 2026-05-04 PASS 21 minutes
- 2026-05-05: MISSING
- 2026-05-06 PASS 23 minutes
