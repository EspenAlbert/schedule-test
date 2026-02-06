# advanced_cluster/advancedcluster/TestAccAdvancedCluster_effectiveUnsetToSet Test Details
# Found 33 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 29) FAIL(x 4)
Success rate: 87.88%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-15 00:29](#error-2026-01-15t0029580000) | OUT_OF_CAPACITY /api/atlas/v2/groups/6968350308bf68c1c0961d97/clusters | dev | out_of_capacity | 5.00s
[2026-01-31 00:35](#error-2026-01-31t0035160000) |  | dev | timeout | 10805.04s
[2026-02-02 00:38](#error-2026-02-02t0038430000) |  | dev | timeout | 10806.07s
[2026-02-03 00:39](#error-2026-02-03t0039260000) | OUT_OF_CAPACITY /api/atlas/v2/groups/698143bcb2e54ee995907038/clusters | dev | out_of_capacity | 6.05s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 17 minutes
- 2026-01-09 PASS 19 minutes
- 2026-01-10 PASS 15 minutes
- 2026-01-11: MISSING
- 2026-01-12 PASS 17 minutes
- 2026-01-13 PASS 23 minutes
- 2026-01-14 PASS 17 minutes
- 2026-01-15

### Error 2026-01-15T00:29:58+00:00
```
2026-01-15T00:29:58.6557952Z === RUN   TestAccAdvancedCluster_effectiveUnsetToSet
2026-01-15T00:31:43.0690489Z === CONT  TestAccAdvancedCluster_effectiveUnsetToSet
2026-01-15T00:31:47.9224109Z === NAME  TestAccAdvancedCluster_effectiveUnsetToSet
2026-01-15T00:31:47.9225290Z     effective_fields_test.go:36: Step 1/2 error: Error running apply: exit status 1
2026-01-15T00:31:47.9702557Z         
2026-01-15T00:31:47.9703604Z         Error: Error in create
2026-01-15T00:31:47.9704040Z         
2026-01-15T00:31:47.9704598Z           with mongodbatlas_advanced_cluster.test,
2026-01-15T00:31:47.9734886Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-01-15T00:31:47.9736025Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-01-15T00:31:47.9736590Z         
2026-01-15T00:31:47.9737361Z         cluster name: test-acc-tf-c-5535282269824666218, API error details:
2026-01-15T00:31:47.9738699Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6968350308bf68c1c0961d97/clusters
2026-01-15T00:31:47.9740054Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-01-15T00:31:47.9741389Z         region is currently out of capacity for the requested instance size. Reason:
2026-01-15T00:31:47.9742319Z         Conflict. Params: [], BadRequestDetail: 
2026-01-15T00:31:48.0581926Z --- FAIL: TestAccAdvancedCluster_effectiveUnsetToSet (5.01s)
```

- 2026-01-16 PASS 23 minutes
- 2026-01-17 PASS 16 minutes
- 2026-01-18: MISSING
- 2026-01-19 PASS 17 minutes
- 2026-01-20 PASS 21 minutes
- 2026-01-21 PASS 20 minutes
- 2026-01-22 PASS 17 minutes
- 2026-01-23 PASS 17 minutes
- 2026-01-24 PASS 16 minutes
- 2026-01-25: MISSING
- 2026-01-26 PASS 16 minutes
- 2026-01-27 PASS 18 minutes
- 2026-01-28 PASS 16 minutes
- 2026-01-29 PASS 27 minutes
- 2026-01-30 PASS 36 minutes
- 2026-01-31

### Error 2026-01-31T00:35:16+00:00
```
2026-01-31T00:35:16.5961977Z === RUN   TestAccAdvancedCluster_effectiveUnsetToSet
2026-01-31T00:36:56.2138556Z === CONT  TestAccAdvancedCluster_effectiveUnsetToSet
2026-01-31T03:37:01.4699043Z === NAME  TestAccAdvancedCluster_effectiveUnsetToSet
2026-01-31T03:37:01.4700032Z     effective_fields_test.go:36: Step 1/2 error: Error running apply: exit status 1
2026-01-31T03:37:01.4700735Z         
2026-01-31T03:37:01.4701168Z         Error: Error in create
2026-01-31T03:37:01.4701587Z         
2026-01-31T03:37:01.4702190Z           with mongodbatlas_advanced_cluster.test,
2026-01-31T03:37:01.4703495Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-01-31T03:37:01.4705870Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-01-31T03:37:01.4706640Z         
2026-01-31T03:37:01.4707634Z         cluster=test-acc-tf-c-900754979609043407 didn't reach desired state: IDLE,
2026-01-31T03:37:01.4708675Z         error: context deadline exceeded
2026-01-31T03:37:01.6643351Z --- FAIL: TestAccAdvancedCluster_effectiveUnsetToSet (10805.44s)
```

- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T00:38:43+00:00
```
2026-02-02T00:38:43.9964064Z === RUN   TestAccAdvancedCluster_effectiveUnsetToSet
2026-02-02T00:40:19.9760891Z === CONT  TestAccAdvancedCluster_effectiveUnsetToSet
2026-02-02T03:40:26.5657782Z === NAME  TestAccAdvancedCluster_effectiveUnsetToSet
2026-02-02T03:40:26.5658811Z     effective_fields_test.go:36: Step 1/2 error: Error running apply: exit status 1
2026-02-02T03:40:26.5659403Z         
2026-02-02T03:40:26.5659687Z         Error: Error in create
2026-02-02T03:40:26.5659961Z         
2026-02-02T03:40:26.5660445Z           with mongodbatlas_advanced_cluster.test,
2026-02-02T03:40:26.5661224Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-02T03:40:26.5662304Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-02T03:40:26.5662844Z         
2026-02-02T03:40:26.5663377Z         cluster=test-acc-tf-c-179698396797575323 didn't reach desired state: IDLE,
2026-02-02T03:40:26.5663937Z         error: context deadline exceeded
2026-02-02T03:40:26.6085204Z    test_working_directory=/tmp/plugintest812932029 test_name=TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling test_step_number=1
2026-02-02T03:40:26.6292751Z --- FAIL: TestAccAdvancedCluster_effectiveUnsetToSet (10806.67s)
```

- 2026-02-03

### Error 2026-02-03T00:39:26+00:00
```
2026-02-03T00:39:26.8815442Z === RUN   TestAccAdvancedCluster_effectiveUnsetToSet
2026-02-03T00:42:03.6521583Z === CONT  TestAccAdvancedCluster_effectiveUnsetToSet
2026-02-03T00:42:09.7775201Z === NAME  TestAccAdvancedCluster_effectiveUnsetToSet
2026-02-03T00:42:09.7776228Z     effective_fields_test.go:36: Step 1/2 error: Error running apply: exit status 1
2026-02-03T00:42:09.7776983Z         
2026-02-03T00:42:09.7777467Z         Error: Error in create
2026-02-03T00:42:09.7777975Z         
2026-02-03T00:42:09.7778603Z           with mongodbatlas_advanced_cluster.test,
2026-02-03T00:42:09.7779953Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-03T00:42:09.7781267Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-03T00:42:09.7781855Z         
2026-02-03T00:42:09.7782763Z         cluster name: test-acc-tf-c-8044680333671912046, API error details:
2026-02-03T00:42:09.7784682Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143bcb2e54ee995907038/clusters
2026-02-03T00:42:09.7785731Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-02-03T00:42:09.7786721Z         region is currently out of capacity for the requested instance size. Reason:
2026-02-03T00:42:09.7787506Z         Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:42:09.7828025Z   
2026-02-03T00:42:10.1607641Z --- FAIL: TestAccAdvancedCluster_effectiveUnsetToSet (6.52s)
```

- 2026-02-04 PASS 18 minutes
- 2026-02-05 PASS 24 minutes
- 2026-02-06 PASS 18 minutes

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 13 minutes
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 17 minutes
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 16 minutes
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 19 minutes
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 19 minutes
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 20 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 17 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
