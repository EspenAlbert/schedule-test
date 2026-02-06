# advanced_cluster/advancedcluster/TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling Test Details
# Found 33 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 30) FAIL(x 3)
Success rate: 90.91%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 00:35](#error-2026-01-31t0035220000) |  | dev | timeout | 10849.09s
[2026-02-02 00:38](#error-2026-02-02t0038510000) |  | dev | timeout | 10823.02s
[2026-02-03 00:39](#error-2026-02-03t0039330000) | OUT_OF_CAPACITY /api/atlas/v2/groups/698143c5b2e54ee99590d5b0/clusters | dev | out_of_capacity | 9.05s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 28 minutes
- 2026-01-09 PASS 34 minutes
- 2026-01-10 PASS 25 minutes
- 2026-01-11: MISSING
- 2026-01-12 PASS 35 minutes
- 2026-01-13 PASS 35 minutes
- 2026-01-14 PASS 31 minutes
- 2026-01-15 PASS 36 minutes
- 2026-01-16 PASS 39 minutes
- 2026-01-17 PASS 31 minutes
- 2026-01-18: MISSING
- 2026-01-19 PASS 28 minutes
- 2026-01-20 PASS 31 minutes
- 2026-01-21 PASS 34 minutes
- 2026-01-22 PASS 37 minutes
- 2026-01-23 PASS 33 minutes
- 2026-01-24 PASS 26 minutes
- 2026-01-25: MISSING
- 2026-01-26 PASS 30 minutes
- 2026-01-27 PASS 31 minutes
- 2026-01-28 PASS 32 minutes
- 2026-01-29 PASS 40 minutes
- 2026-01-30 PASS 49 minutes
- 2026-01-31

### Error 2026-01-31T00:35:22+00:00
```
2026-01-31T00:35:22.4161427Z === RUN   TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling
2026-01-31T00:36:56.1883368Z === CONT  TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling
2026-01-31T00:37:41.1501969Z === NAME  TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling
2026-01-31T00:37:41.1503968Z     pre_check.go:46: Time before creating cluster: 2026-01-31T00:37:41.149954398Z, ProjectID: 697d4e4a7d00588dcf9f5262, Cluster name: test-acc-tf-c-321155023617303278
2026-01-31T03:37:41.7789775Z === NAME  TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling
2026-01-31T03:37:41.7790748Z     resource_test.go:401: Step 1/5 error: Error running apply: exit status 1
2026-01-31T03:37:41.7791184Z         
2026-01-31T03:37:41.7791439Z         Error: Error in create
2026-01-31T03:37:41.7791692Z         
2026-01-31T03:37:41.7792021Z           with mongodbatlas_advanced_cluster.test,
2026-01-31T03:37:41.7793148Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-01-31T03:37:41.7794065Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-01-31T03:37:41.7794397Z         
2026-01-31T03:37:41.7794852Z         cluster=test-acc-tf-c-321155023617303278 didn't reach desired state: IDLE,
2026-01-31T03:37:41.7795332Z         error: context deadline exceeded
2026-01-31T03:37:41.8300165Z --- FAIL: TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling (10849.87s)
```

- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T00:38:51+00:00
```
2026-02-02T00:38:51.9715457Z === RUN   TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling
2026-02-02T00:40:19.9013691Z === CONT  TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling
2026-02-02T00:40:39.9150250Z === NAME  TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling
2026-02-02T00:40:39.9155307Z     pre_check.go:46: Time before creating cluster: 2026-02-02T00:40:39.914581047Z, ProjectID: 697ff21c71768356d7f8c603, Cluster name: test-acc-tf-c-6146017590963941354
2026-02-02T03:40:40.5651974Z === NAME  TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling
2026-02-02T03:40:40.5653081Z     resource_test.go:401: Step 1/5 error: Error running apply: exit status 1
2026-02-02T03:40:40.5653671Z         
2026-02-02T03:40:40.5653997Z         Error: Error in create
2026-02-02T03:40:40.5654327Z         
2026-02-02T03:40:40.5654859Z           with mongodbatlas_advanced_cluster.test,
2026-02-02T03:40:40.5655867Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-02T03:40:40.5656735Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-02T03:40:40.5657144Z         
2026-02-02T03:40:40.5657681Z         cluster=test-acc-tf-c-6146017590963941354 didn't reach desired state: IDLE,
2026-02-02T03:40:40.5658238Z         error: context deadline exceeded
2026-02-02T03:40:40.6128718Z --- FAIL: TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling (10823.20s)
```

- 2026-02-03

### Error 2026-02-03T00:39:33+00:00
```
2026-02-03T00:39:33.6364700Z === RUN   TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling
2026-02-03T00:42:03.6087983Z === CONT  TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling
2026-02-03T00:42:08.6276911Z === NAME  TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling
2026-02-03T00:42:08.6287278Z     pre_check.go:46: Time before creating cluster: 2026-02-03T00:42:08.622633382Z, ProjectID: 698143c5b2e54ee99590d5b0, Cluster name: test-acc-tf-c-5962818939842050324
2026-02-03T00:42:09.1138270Z   
2026-02-03T00:42:10.4893136Z === NAME  TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling
2026-02-03T00:42:10.4893838Z     resource_test.go:401: Step 1/5 error: Error running apply: exit status 1
2026-02-03T00:42:10.4894256Z         
2026-02-03T00:42:10.4894568Z         Error: Error in create
2026-02-03T00:42:10.4894832Z         
2026-02-03T00:42:10.4895158Z           with mongodbatlas_advanced_cluster.test,
2026-02-03T00:42:10.4895792Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-03T00:42:10.4896482Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-03T00:42:10.4896867Z         
2026-02-03T00:42:10.4897303Z         cluster name: test-acc-tf-c-5962818939842050324, API error details:
2026-02-03T00:42:10.4898177Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143c5b2e54ee99590d5b0/clusters
2026-02-03T00:42:10.4899194Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-02-03T00:42:10.4899854Z         region is currently out of capacity for the requested instance size. Reason:
2026-02-03T00:42:10.4900347Z         Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:42:10.5632126Z --- FAIL: TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling (9.47s)
```

- 2026-02-04 PASS 53 minutes
- 2026-02-05 PASS 35 minutes
- 2026-02-06 PASS 35 minutes

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 25 minutes
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 32 minutes
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 25 minutes
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 25 minutes
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 30 minutes
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 33 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 28 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
