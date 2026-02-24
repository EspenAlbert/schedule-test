# search_index/searchindex/TestAccSearchIndex_withNumPartitions Test Details
# Found 30 TestRuns in dev, qa from 2026-01-26 to 2026-02-24 from master branch: 1 unique tests, PASS(x 28) FAIL(x 2)
Success rate: 93.33%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-03 00:39](#error-2026-02-03t0039240000) | OUT_OF_CAPACITY /api/atlas/v2/groups/698143b5e3c7fce2317dcdd2/clusters | dev | out_of_capacity | 0.05s
[2026-02-24 00:50](#error-2026-02-24t0050170000) |  | dev | flaky_500 | 800.02s

### Timeline
- 2026-01-25: MISSING
- 2026-01-26 PASS 15 minutes
- 2026-01-27 PASS 17 minutes
- 2026-01-28 PASS 16 minutes
- 2026-01-29 PASS 18 minutes
- 2026-01-30 PASS 24 minutes
- 2026-01-31: MISSING
- 2026-02-01: MISSING
- 2026-02-02: MISSING
- 2026-02-03

### Error 2026-02-03T00:39:24+00:00
```
2026-02-03T00:39:24.3118618Z === RUN   TestAccSearchIndex_withNumPartitions
2026-02-03T00:39:24.3119204Z     resource_search_index_test.go:198: Creating execution cluster: test-acc-tf-c-7767261731695312885
2026-02-03T00:39:24.8115455Z     resource_search_index_test.go:198: 
2026-02-03T00:39:24.8117643Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:46
2026-02-03T00:39:24.8120920Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:203
2026-02-03T00:39:24.8123202Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:198
2026-02-03T00:39:24.8124144Z         	Error:      	Received unexpected error:
2026-02-03T00:39:24.8126985Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143b5e3c7fce2317dcdd2/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:39:24.8128539Z         	Test:       	TestAccSearchIndex_withNumPartitions
2026-02-03T00:39:24.8130658Z         	Messages:   	Cluster creation failed: test-acc-tf-c-7767261731695312885, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143b5e3c7fce2317dcdd2/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:39:24.8132050Z --- FAIL: TestAccSearchIndex_withNumPartitions (0.50s)
```

- 2026-02-04 PASS 12 minutes
- 2026-02-05 PASS 12 minutes
- 2026-02-06 PASS 13 minutes
- 2026-02-07 PASS 11 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 12 minutes
- 2026-02-10 PASS 12 minutes
- 2026-02-11 PASS 13 minutes
- 2026-02-12 PASS 13 minutes
- 2026-02-13 PASS 13 minutes
- 2026-02-14 PASS 14 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 13 minutes
- 2026-02-17 PASS 12 minutes
- 2026-02-18 PASS 14 minutes
- 2026-02-19 PASS 27 minutes
- 2026-02-20 PASS 14 minutes
- 2026-02-21 PASS 14 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 13 minutes
- 2026-02-24

### Error 2026-02-24T00:50:17+00:00
```
2026-02-24T00:50:17.1605275Z === RUN   TestAccSearchIndex_withNumPartitions
2026-02-24T01:00:45.5918412Z   
2026-02-24T01:00:45.5919275Z     resource_search_index_test.go:201: Step 1/3 error: Error running apply: exit status 1
2026-02-24T01:00:45.5920226Z         
2026-02-24T01:00:45.5920914Z         Error: error creating index: (503 Service Unavailable) failed to decode response body: undefined response type
2026-02-24T01:00:45.5921459Z         
2026-02-24T01:00:45.5922001Z           with mongodbatlas_search_index.test,
2026-02-24T01:00:45.5922840Z           on terraform_plugin_test.tf line 24, in resource "mongodbatlas_search_index" "test":
2026-02-24T01:00:45.5923467Z           24: 		resource "mongodbatlas_search_index" "test" {
2026-02-24T01:00:45.5923785Z         
2026-02-24T01:03:37.3232259Z --- FAIL: TestAccSearchIndex_withNumPartitions (800.16s)
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
- 2026-02-01 PASS 17 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 10 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 16 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 16 minutes
- 2026-02-16: MISSING
- 2026-02-17 PASS 14 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 13 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
