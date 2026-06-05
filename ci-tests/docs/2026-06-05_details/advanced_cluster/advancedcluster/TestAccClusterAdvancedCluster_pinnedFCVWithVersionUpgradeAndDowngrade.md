# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 28) FAIL(x 2)
Success rate: 93.33%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-15 00:57](#error-2026-05-15t0057150000) |  | dev | timeout | 10893.02s
[2026-05-28 01:02](#error-2026-05-28t0102460000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 2.00s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS 45 minutes
- 2026-05-08 PASS 38 minutes
- 2026-05-09 PASS 37 minutes
- 2026-05-10: MISSING
- 2026-05-11 PASS 34 minutes
- 2026-05-12 PASS 35 minutes
- 2026-05-13 PASS 34 minutes
- 2026-05-14 PASS 54 minutes
- 2026-05-15

### Error 2026-05-15T00:57:15+00:00
```
2026-05-15T00:57:15.5978087Z === RUN   TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-05-15T00:58:38.1903519Z === CONT  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-05-15T03:58:47.9354219Z === NAME  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-05-15T03:58:47.9354966Z     resource_test.go:881: Step 1/8 error: Error running apply: exit status 1
2026-05-15T03:58:47.9355469Z         
2026-05-15T03:58:47.9355748Z         Error: Error in create
2026-05-15T03:58:47.9356065Z         
2026-05-15T03:58:47.9356778Z           with mongodbatlas_advanced_cluster.test,
2026-05-15T03:58:47.9357636Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2026-05-15T03:58:47.9358289Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-05-15T03:58:47.9358859Z         
2026-05-15T03:58:47.9359332Z         cluster=test-acc-tf-c-2710003094714644722 didn't reach desired state: IDLE,
2026-05-15T03:58:47.9360093Z         error: context deadline exceeded
2026-05-15T03:58:52.9235940Z    test_working_directory=/tmp/plugintest1243450836 test_step_number=2
2026-05-15T04:00:10.2093810Z --- FAIL: TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade (10893.21s)
```

- 2026-05-16 PASS 26 minutes
- 2026-05-17: MISSING
- 2026-05-18 PASS 47 minutes
- 2026-05-19 PASS 29 minutes
- 2026-05-20 PASS 35 minutes
- 2026-05-21 PASS 34 minutes
- 2026-05-22 PASS 55 minutes
- 2026-05-23 PASS 35 minutes
- 2026-05-24: MISSING
- 2026-05-25 PASS 33 minutes
- 2026-05-26 PASS 27 minutes
- 2026-05-27 PASS an hour
- 2026-05-28

### Error 2026-05-28T01:02:46+00:00
```
2026-05-28T01:02:46.7786963Z === RUN   TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-05-28T01:02:49.4526890Z === CONT  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-05-28T01:02:51.4283578Z === NAME  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-05-28T01:02:51.4284727Z     resource_test.go:882: Step 1/8 error: Error running apply: exit status 1
2026-05-28T01:02:51.4285432Z         
2026-05-28T01:02:51.4286178Z         Error: error creating project: test-acc-tf-p-7076509878004886841
2026-05-28T01:02:51.4286823Z         
2026-05-28T01:02:51.4287371Z           with mongodbatlas_project.test,
2026-05-28T01:02:51.4288812Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-28T01:02:51.4289838Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-28T01:02:51.4290392Z         
2026-05-28T01:02:51.4291227Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2026-05-28T01:02:51.4291946Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2026-05-28T01:02:51.4293206Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2026-05-28T01:02:51.4294274Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2026-05-28T01:02:51.4295030Z         BadRequestDetail: 
2026-05-28T01:02:51.4932359Z --- FAIL: TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade (2.04s)
```

- 2026-05-29 PASS 35 minutes
- 2026-05-30 PASS 25 minutes
- 2026-05-31: MISSING
- 2026-06-01 PASS 42 minutes
- 2026-06-02 PASS 27 minutes
- 2026-06-03 PASS 41 minutes
- 2026-06-04 PASS 55 minutes
- 2026-06-05 PASS 33 minutes

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 30 minutes
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 29 minutes
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 29 minutes
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 26 minutes
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
