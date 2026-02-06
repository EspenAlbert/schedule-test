# search_index/searchindex/TestAccSearchIndex_updatedToEmptyMappingsFields Test Details
# Found 31 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-03 00:39](#error-2026-02-03t0039230000) | OUT_OF_CAPACITY /api/atlas/v2/groups/698143b5e3c7fce2317dcdd2/clusters | dev | out_of_capacity | 0.05s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 9 seconds
- 2026-01-09 PASS 10 seconds
- 2026-01-10 PASS 10 seconds
- 2026-01-11: MISSING
- 2026-01-12 PASS 9 seconds
- 2026-01-13 PASS 8 seconds
- 2026-01-14 PASS 11 seconds
- 2026-01-15 PASS 10 seconds
- 2026-01-16 PASS 12 seconds
- 2026-01-17 PASS 10 seconds
- 2026-01-18: MISSING
- 2026-01-19 PASS 9 seconds
- 2026-01-20 PASS 8 seconds
- 2026-01-21 PASS 9 seconds
- 2026-01-22 PASS 9 seconds
- 2026-01-23 PASS 10 seconds
- 2026-01-24 PASS 9 seconds
- 2026-01-25: MISSING
- 2026-01-26 PASS 9 seconds
- 2026-01-27 PASS 8 seconds
- 2026-01-28 PASS 10 seconds
- 2026-01-29 PASS 9 seconds
- 2026-01-30 PASS 11 seconds
- 2026-01-31: MISSING
- 2026-02-01: MISSING
- 2026-02-02: MISSING
- 2026-02-03

### Error 2026-02-03T00:39:23+00:00
```
2026-02-03T00:39:23.2814863Z === RUN   TestAccSearchIndex_updatedToEmptyMappingsFields
2026-02-03T00:39:23.2815496Z     resource_search_index_test.go:172: Creating execution cluster: test-acc-tf-c-1717951886274524966
2026-02-03T00:39:23.7990124Z     resource_search_index_test.go:172: 
2026-02-03T00:39:23.7992061Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:46
2026-02-03T00:39:23.7994700Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:203
2026-02-03T00:39:23.7997524Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:172
2026-02-03T00:39:23.7998794Z         	Error:      	Received unexpected error:
2026-02-03T00:39:23.8001901Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143b5e3c7fce2317dcdd2/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:39:23.8003571Z         	Test:       	TestAccSearchIndex_updatedToEmptyMappingsFields
2026-02-03T00:39:23.8006267Z         	Messages:   	Cluster creation failed: test-acc-tf-c-1717951886274524966, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143b5e3c7fce2317dcdd2/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:39:23.8007983Z --- FAIL: TestAccSearchIndex_updatedToEmptyMappingsFields (0.52s)
```

- 2026-02-04 PASS 10 seconds
- 2026-02-05 PASS 8 seconds
- 2026-02-06 PASS 11 seconds

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 10 seconds
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 10 seconds
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 9 seconds
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 10 seconds
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 10 seconds
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 8 seconds
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 9 seconds
- 2026-02-05: MISSING
- 2026-02-06: MISSING
