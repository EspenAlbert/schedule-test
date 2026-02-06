# advanced_cluster/advancedcluster/TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard Test Details
# Found 33 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 30) FAIL(x 3)
Success rate: 90.91%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 00:35](#error-2026-01-31t0035260000) |  | dev | timeout | 10841.08s
[2026-02-02 00:38](#error-2026-02-02t0038540000) |  | dev | timeout | 10842.00s
[2026-02-03 00:39](#error-2026-02-03t0039360000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69814461e3c7fce231805a8e/clusters | dev | out_of_capacity | 11.01s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 47 minutes
- 2026-01-09 PASS 53 minutes
- 2026-01-10 PASS 46 minutes
- 2026-01-11: MISSING
- 2026-01-12 PASS 53 minutes
- 2026-01-13 PASS 54 minutes
- 2026-01-14 PASS 51 minutes
- 2026-01-15 PASS 55 minutes
- 2026-01-16 PASS 55 minutes
- 2026-01-17 PASS 54 minutes
- 2026-01-18: MISSING
- 2026-01-19 PASS 47 minutes
- 2026-01-20 PASS 50 minutes
- 2026-01-21 PASS 53 minutes
- 2026-01-22 PASS 54 minutes
- 2026-01-23 PASS 48 minutes
- 2026-01-24 PASS 45 minutes
- 2026-01-25: MISSING
- 2026-01-26 PASS 47 minutes
- 2026-01-27 PASS 50 minutes
- 2026-01-28 PASS 50 minutes
- 2026-01-29 PASS an hour
- 2026-01-30 PASS an hour
- 2026-01-31

### Error 2026-01-31T00:35:26+00:00
```
2026-01-31T00:35:26.7112546Z === RUN   TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2026-01-31T00:36:56.1525431Z === CONT  TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2026-01-31T03:37:06.7753051Z === NAME  TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2026-01-31T03:37:06.7754526Z     resource_test.go:653: Step 1/4 error: Error running apply: exit status 1
2026-01-31T03:37:06.7755163Z         
2026-01-31T03:37:06.7755575Z         Error: Error in create
2026-01-31T03:37:06.7755979Z         
2026-01-31T03:37:06.7756526Z           with mongodbatlas_advanced_cluster.test,
2026-01-31T03:37:06.7757690Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2026-01-31T03:37:06.7758781Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-01-31T03:37:06.7759316Z         
2026-01-31T03:37:06.7760084Z         cluster=test-acc-tf-c-6069288020795946612 didn't reach desired state: IDLE,
2026-01-31T03:37:06.7760881Z         error: context deadline exceeded
2026-01-31T03:37:06.8275079Z   
2026-01-31T03:37:37.9740990Z --- FAIL: TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard (10841.82s)
```

- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T00:38:54+00:00
```
2026-02-02T00:38:54.5399328Z === RUN   TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2026-02-02T00:40:19.8903603Z === CONT  TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2026-02-02T03:40:30.4936807Z === NAME  TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2026-02-02T03:40:30.4938292Z     resource_test.go:653: Step 1/4 error: Error running apply: exit status 1
2026-02-02T03:40:30.4938772Z         
2026-02-02T03:40:30.4939073Z         Error: Error in create
2026-02-02T03:40:30.4939368Z         
2026-02-02T03:40:30.4939780Z           with mongodbatlas_advanced_cluster.test,
2026-02-02T03:40:30.4940631Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-02T03:40:30.4941430Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-02T03:40:30.4941821Z         
2026-02-02T03:40:30.4942650Z         cluster=test-acc-tf-c-4118233704941489481 didn't reach desired state: IDLE,
2026-02-02T03:40:30.4943248Z         error: context deadline exceeded
2026-02-02T03:40:30.7975511Z   
2026-02-02T03:41:01.9073471Z --- FAIL: TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard (10842.02s)
```

- 2026-02-03

### Error 2026-02-03T00:39:36+00:00
```
2026-02-03T00:39:36.2424953Z === RUN   TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2026-02-03T00:42:03.6665671Z === CONT  TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2026-02-03T00:42:14.0081690Z === NAME  TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2026-02-03T00:42:14.0082795Z     resource_test.go:653: Step 1/4 error: Error running apply: exit status 1
2026-02-03T00:42:14.0083350Z         
2026-02-03T00:42:14.0084216Z         Error: Error in create
2026-02-03T00:42:14.0084855Z         
2026-02-03T00:42:14.0085382Z           with mongodbatlas_advanced_cluster.test,
2026-02-03T00:42:14.0086577Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-03T00:42:14.0087549Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-03T00:42:14.0088083Z         
2026-02-03T00:42:14.0088787Z         cluster name: test-acc-tf-c-1592727465917468320, API error details:
2026-02-03T00:42:14.0090114Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69814461e3c7fce231805a8e/clusters
2026-02-03T00:42:14.0091352Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-02-03T00:42:14.0092595Z         region is currently out of capacity for the requested instance size. Reason:
2026-02-03T00:42:14.0093503Z         Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:42:14.0684105Z    test_name=TestAccClusterAdvancedCluster_replicaSetMultiCloud
2026-02-03T00:42:14.7445437Z --- FAIL: TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard (11.08s)
```

- 2026-02-04 PASS an hour
- 2026-02-05 PASS an hour
- 2026-02-06 PASS an hour

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 47 minutes
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 50 minutes
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 43 minutes
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 45 minutes
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 48 minutes
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 49 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 46 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
