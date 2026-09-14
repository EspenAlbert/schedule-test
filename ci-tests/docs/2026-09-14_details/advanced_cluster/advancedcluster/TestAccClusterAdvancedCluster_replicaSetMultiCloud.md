# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_replicaSetMultiCloud Test Details
# Found 8 TestRuns in dev, qa from 2026-09-08 to 2026-09-14 from master branch: 1 unique tests, PASS(x 6) FAIL(x 2)
Success rate: 75.00%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-09-10 00:41](#error-2026-09-10t0041030000) |  | dev | timeout | 13003.05s
[2026-09-11 00:42](#error-2026-09-11t0042120000) |  | dev | timeout | 11015.06s

### Timeline
- 2026-09-07: MISSING
- 2026-09-08 PASS an hour
- 2026-09-09 PASS an hour
- 2026-09-10

### Error 2026-09-10T00:41:03+00:00
```
2026-09-10T00:41:03.0072826Z === RUN   TestAccClusterAdvancedCluster_replicaSetMultiCloud
2026-09-10T00:42:25.5882590Z === CONT  TestAccClusterAdvancedCluster_replicaSetMultiCloud
2026-09-10T04:15:54.0128503Z === NAME  TestAccClusterAdvancedCluster_replicaSetMultiCloud
2026-09-10T04:15:54.0129227Z     resource_test.go:153: Step 2/3 error: Error running apply: exit status 1
2026-09-10T04:15:54.0129686Z         
2026-09-10T04:15:54.0130071Z         Error: Error in create
2026-09-10T04:15:54.0130382Z         
2026-09-10T04:15:54.0130820Z           with mongodbatlas_advanced_cluster.test,
2026-09-10T04:15:54.0131534Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2026-09-10T04:15:54.0132192Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-09-10T04:15:54.0132727Z         
2026-09-10T04:15:54.0133281Z         cluster=test-acc-tf-c-8266480626971962762 didn't reach desired state: IDLE,
2026-09-10T04:15:54.0134098Z         error: context deadline exceeded
2026-09-10T04:19:08.5071285Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetMultiCloud (13003.51s)
```

- 2026-09-11
  - FAIL 3 hours

### Error 2026-09-11T00:42:12+00:00
```
2026-09-11T00:42:12.3758176Z === RUN   TestAccClusterAdvancedCluster_replicaSetMultiCloud
2026-09-11T00:44:59.7070872Z === CONT  TestAccClusterAdvancedCluster_replicaSetMultiCloud
2026-09-11T03:45:11.2621122Z === NAME  TestAccClusterAdvancedCluster_replicaSetMultiCloud
2026-09-11T03:45:11.2621723Z     resource_test.go:153: Step 1/3 error: Error running apply: exit status 1
2026-09-11T03:45:11.2622288Z         
2026-09-11T03:45:11.2622570Z         Error: Error in create
2026-09-11T03:45:11.2622840Z         
2026-09-11T03:45:11.2623330Z           with mongodbatlas_advanced_cluster.test,
2026-09-11T03:45:11.2624041Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2026-09-11T03:45:11.2625052Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-09-11T03:45:11.2625461Z         
2026-09-11T03:45:11.2626179Z         cluster=test-acc-tf-c-5919722402802043455 didn't reach desired state: IDLE,
2026-09-11T03:45:11.2626807Z         error: context deadline exceeded
2026-09-11T03:48:34.6469519Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetMultiCloud (11015.63s)
```

  - PASS an hour
- 2026-09-12 PASS 43 minutes
- 2026-09-13: MISSING
- 2026-09-14 PASS 46 minutes

## QA Environment
### Timeline
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 50 minutes
- 2026-09-14: MISSING
