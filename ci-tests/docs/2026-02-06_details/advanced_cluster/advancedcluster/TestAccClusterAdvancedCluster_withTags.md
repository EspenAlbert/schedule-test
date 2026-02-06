# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_withTags Test Details
# Found 33 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 30) FAIL(x 3)
Success rate: 90.91%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 00:35](#error-2026-01-31t0035260000) |  | dev | timeout | 10840.04s
[2026-02-02 00:38](#error-2026-02-02t0038540000) |  | dev | timeout | 10851.06s
[2026-02-03 00:39](#error-2026-02-03t0039360000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69814461e3c7fce231805a79/clusters | dev | out_of_capacity | 11.01s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 19 minutes
- 2026-01-09 PASS 26 minutes
- 2026-01-10 PASS 18 minutes
- 2026-01-11: MISSING
- 2026-01-12 PASS 21 minutes
- 2026-01-13 PASS 25 minutes
- 2026-01-14 PASS 21 minutes
- 2026-01-15 PASS 24 minutes
- 2026-01-16 PASS 23 minutes
- 2026-01-17 PASS 20 minutes
- 2026-01-18: MISSING
- 2026-01-19 PASS 15 minutes
- 2026-01-20 PASS 17 minutes
- 2026-01-21 PASS 21 minutes
- 2026-01-22 PASS 25 minutes
- 2026-01-23 PASS 28 minutes
- 2026-01-24 PASS 18 minutes
- 2026-01-25: MISSING
- 2026-01-26 PASS 17 minutes
- 2026-01-27 PASS 21 minutes
- 2026-01-28 PASS 21 minutes
- 2026-01-29 PASS 25 minutes
- 2026-01-30 PASS 36 minutes
- 2026-01-31

### Error 2026-01-31T00:35:26+00:00
```
2026-01-31T00:35:26.6409429Z === RUN   TestAccClusterAdvancedCluster_withTags
2026-01-31T00:36:56.1880290Z === CONT  TestAccClusterAdvancedCluster_withTags
2026-01-31T03:37:05.3202140Z === NAME  TestAccClusterAdvancedCluster_withTags
2026-01-31T03:37:05.3202787Z     resource_test.go:506: Step 1/4 error: Error running apply: exit status 1
2026-01-31T03:37:05.3203318Z         
2026-01-31T03:37:05.3203759Z         Error: Error in create
2026-01-31T03:37:05.3204067Z         
2026-01-31T03:37:05.3204409Z           with mongodbatlas_advanced_cluster.test,
2026-01-31T03:37:05.3205223Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2026-01-31T03:37:05.3206294Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-01-31T03:37:05.3206707Z         
2026-01-31T03:37:05.3207387Z         cluster=test-acc-tf-c-9033039242575235265 didn't reach desired state: IDLE,
2026-01-31T03:37:05.3207974Z         error: context deadline exceeded
2026-01-31T03:37:05.8122989Z    test_step_number=1
2026-01-31T03:37:36.5561607Z --- FAIL: TestAccClusterAdvancedCluster_withTags (10840.37s)
```

- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T00:38:54+00:00
```
2026-02-02T00:38:54.4570286Z === RUN   TestAccClusterAdvancedCluster_withTags
2026-02-02T00:40:19.9005628Z === CONT  TestAccClusterAdvancedCluster_withTags
2026-02-02T03:40:30.0036156Z === NAME  TestAccClusterAdvancedCluster_withTags
2026-02-02T03:40:30.0037239Z     resource_test.go:506: Step 1/4 error: Error running apply: exit status 1
2026-02-02T03:40:30.0037961Z         
2026-02-02T03:40:30.0038414Z         Error: Error in create
2026-02-02T03:40:30.0038862Z         
2026-02-02T03:40:30.0039315Z           with mongodbatlas_advanced_cluster.test,
2026-02-02T03:40:30.0040236Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-02T03:40:30.0041099Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-02T03:40:30.0041524Z         
2026-02-02T03:40:30.0042309Z         cluster=test-acc-tf-c-6406092496636631746 didn't reach desired state: IDLE,
2026-02-02T03:40:30.0042962Z         error: context deadline exceeded
2026-02-02T03:40:30.4935062Z    test_name=TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2026-02-02T03:41:11.4538040Z --- FAIL: TestAccClusterAdvancedCluster_withTags (10851.56s)
```

- 2026-02-03

### Error 2026-02-03T00:39:36+00:00
```
2026-02-03T00:39:36.1557598Z === RUN   TestAccClusterAdvancedCluster_withTags
2026-02-03T00:42:03.6631206Z === CONT  TestAccClusterAdvancedCluster_withTags
2026-02-03T00:42:13.8959692Z === NAME  TestAccClusterAdvancedCluster_withTags
2026-02-03T00:42:13.8960660Z     resource_test.go:506: Step 1/4 error: Error running apply: exit status 1
2026-02-03T00:42:13.8961428Z         
2026-02-03T00:42:13.8961987Z         Error: Error in create
2026-02-03T00:42:13.8962450Z         
2026-02-03T00:42:13.8963114Z           with mongodbatlas_advanced_cluster.test,
2026-02-03T00:42:13.8964457Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-03T00:42:13.8965646Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-03T00:42:13.8966403Z         
2026-02-03T00:42:13.8967368Z         cluster name: test-acc-tf-c-7876088839744105572, API error details:
2026-02-03T00:42:13.8968771Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69814461e3c7fce231805a79/clusters
2026-02-03T00:42:13.8970163Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-02-03T00:42:13.8971171Z         region is currently out of capacity for the requested instance size. Reason:
2026-02-03T00:42:13.8972200Z         Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:42:14.0081032Z   
2026-02-03T00:42:14.6871743Z --- FAIL: TestAccClusterAdvancedCluster_withTags (11.05s)
```

- 2026-02-04 PASS 18 minutes
- 2026-02-05 PASS 24 minutes
- 2026-02-06 PASS 22 minutes

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 15 minutes
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 19 minutes
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 18 minutes
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 16 minutes
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 19 minutes
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 25 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 17 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
