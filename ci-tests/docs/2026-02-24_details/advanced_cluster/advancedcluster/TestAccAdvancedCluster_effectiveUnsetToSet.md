# advanced_cluster/advancedcluster/TestAccAdvancedCluster_effectiveUnsetToSet Test Details
# Found 33 TestRuns in dev, qa from 2026-01-26 to 2026-02-24 from master branch: 1 unique tests, PASS(x 29) FAIL(x 4)
Success rate: 87.88%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 00:35](#error-2026-01-31t0035160000) |  | dev | timeout | 10805.04s
[2026-02-02 00:38](#error-2026-02-02t0038430000) |  | dev | timeout | 10806.07s
[2026-02-03 00:39](#error-2026-02-03t0039260000) | OUT_OF_CAPACITY /api/atlas/v2/groups/698143bcb2e54ee995907038/clusters | dev | out_of_capacity | 6.05s
[2026-02-24 00:36](#error-2026-02-24t0036590000) |  | dev | flaky_500 | 1269.03s

### Timeline
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
- 2026-02-07 PASS 18 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 21 minutes
- 2026-02-10 PASS 18 minutes
- 2026-02-11 PASS 19 minutes
- 2026-02-12 PASS 18 minutes
- 2026-02-13 PASS 17 minutes
- 2026-02-14 PASS 18 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 21 minutes
- 2026-02-17 PASS 17 minutes
- 2026-02-18 PASS 20 minutes
- 2026-02-19 PASS 23 minutes
- 2026-02-20 PASS 21 minutes
- 2026-02-21 PASS 19 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 20 minutes
- 2026-02-24

### Error 2026-02-24T00:36:59+00:00
```
2026-02-24T00:36:59.5605711Z === RUN   TestAccAdvancedCluster_effectiveUnsetToSet
2026-02-24T00:40:00.6223939Z === CONT  TestAccAdvancedCluster_effectiveUnsetToSet
2026-02-24T00:57:00.5908210Z === NAME  TestAccAdvancedCluster_effectiveUnsetToSet
2026-02-24T00:57:00.5909236Z     effective_fields_test.go:36: Step 1/2 error: Error running post-apply non-refresh plan: exit status 1
2026-02-24T00:57:00.5909752Z         
2026-02-24T00:57:00.5910068Z         Error: error resolving container IDs
2026-02-24T00:57:00.5910431Z         
2026-02-24T00:57:00.5910840Z           with data.mongodbatlas_advanced_clusters.test,
2026-02-24T00:57:00.5911687Z           on terraform_plugin_test.tf line 43, in data "mongodbatlas_advanced_clusters" "test":
2026-02-24T00:57:00.5912714Z           43: 		data "mongodbatlas_advanced_clusters" "test" {
2026-02-24T00:57:00.5913048Z         
2026-02-24T00:57:00.5913779Z         cluster name = test-acc-tf-c-4971672503540266852, error details: (503 Service
2026-02-24T00:57:00.5914858Z         Unavailable) failed to decode response body: undefined response type
2026-02-24T00:57:01.5844027Z    test_working_directory=/tmp/plugintest3762949835
2026-02-24T01:01:09.8880165Z --- FAIL: TestAccAdvancedCluster_effectiveUnsetToSet (1269.27s)
```


## QA Environment
### Timeline
- 2026-01-25: MISSING
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
- 2026-02-07: MISSING
- 2026-02-08 PASS 20 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 22 minutes
- 2026-02-16: MISSING
- 2026-02-17
  - PASS 16 minutes
  - PASS 13 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 17 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
