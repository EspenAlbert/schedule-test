# search_index/searchindex/TestAccSearchIndex_withVector Test Details
# Found 34 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 33) FAIL
Success rate: 97.06%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-16 00:50](#error-2026-04-16t0050440000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69e0325a1ec945fedc71a07e/clusters | dev | out_of_capacity | 0.07s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 5 seconds
- 2026-04-08 PASS 7 seconds
- 2026-04-09 PASS 7 seconds
- 2026-04-10 PASS 7 seconds
- 2026-04-11 PASS 6 seconds
- 2026-04-12: MISSING
- 2026-04-13 PASS 8 seconds
- 2026-04-14 PASS 7 seconds
- 2026-04-15 PASS 8 seconds
- 2026-04-16

### Error 2026-04-16T00:50:44+00:00
```
2026-04-16T00:50:44.4136470Z === RUN   TestAccSearchIndex_withVector
2026-04-16T00:50:44.4137194Z     resource_search_index_test.go:193: Creating execution cluster: test-acc-tf-c-6234914926129523680
2026-04-16T00:50:45.1458104Z     resource_search_index_test.go:193: 
2026-04-16T00:50:45.1459702Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:46
2026-04-16T00:50:45.1461923Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:194
2026-04-16T00:50:45.1464853Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:342
2026-04-16T00:50:45.1467408Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:193
2026-04-16T00:50:45.1468540Z         	Error:      	Received unexpected error:
2026-04-16T00:50:45.1471426Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e0325a1ec945fedc71a07e/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2026-04-16T00:50:45.1473400Z         	Test:       	TestAccSearchIndex_withVector
2026-04-16T00:50:45.1476035Z         	Messages:   	Cluster creation failed: test-acc-tf-c-6234914926129523680, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e0325a1ec945fedc71a07e/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2026-04-16T00:50:45.1477714Z --- FAIL: TestAccSearchIndex_withVector (0.73s)
```

- 2026-04-17 PASS 8 seconds
- 2026-04-18 PASS 6 seconds
- 2026-04-19: MISSING
- 2026-04-20 PASS 8 seconds
- 2026-04-21 PASS 8 seconds
- 2026-04-22 PASS 6 seconds
- 2026-04-23 PASS 7 seconds
- 2026-04-24 PASS 9 seconds
- 2026-04-25 PASS 12 seconds
- 2026-04-26: MISSING
- 2026-04-27 PASS 10 seconds
- 2026-04-28 PASS 11 seconds
- 2026-04-29 PASS 11 seconds
- 2026-04-30 PASS 12 seconds
- 2026-05-01 PASS 14 seconds
- 2026-05-02 PASS 12 seconds
- 2026-05-03: MISSING
- 2026-05-04 PASS 14 seconds
- 2026-05-05 PASS 13 seconds
- 2026-05-06 PASS 11 seconds

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 7 seconds
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 9 seconds
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 7 seconds
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 7 seconds
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 14 seconds
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 11 seconds
- 2026-05-04 PASS 13 seconds
- 2026-05-05: MISSING
- 2026-05-06 PASS 10 seconds
