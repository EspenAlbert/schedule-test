# search_index/searchindex/TestAccSearchIndex_withStoredSourceFalse Test Details
# Found 34 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 33) FAIL
Success rate: 97.06%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-16 00:50](#error-2026-04-16t0050460000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69e0325a1ec945fedc71a07e/clusters | dev | out_of_capacity | 0.09s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 7 seconds
- 2026-04-08 PASS 6 seconds
- 2026-04-09 PASS 7 seconds
- 2026-04-10 PASS 9 seconds
- 2026-04-11 PASS 7 seconds
- 2026-04-12: MISSING
- 2026-04-13 PASS 9 seconds
- 2026-04-14 PASS 7 seconds
- 2026-04-15 PASS 8 seconds
- 2026-04-16

### Error 2026-04-16T00:50:46+00:00
```
2026-04-16T00:50:46.8235486Z === RUN   TestAccSearchIndex_withStoredSourceFalse
2026-04-16T00:50:46.8236415Z     resource_search_index_test.go:274: Creating execution cluster: test-acc-tf-c-6327904172725052274
2026-04-16T00:50:47.7545781Z     resource_search_index_test.go:274: 
2026-04-16T00:50:47.7547416Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:46
2026-04-16T00:50:47.7549466Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:194
2026-04-16T00:50:47.7551998Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:300
2026-04-16T00:50:47.7554248Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:274
2026-04-16T00:50:47.7555222Z         	Error:      	Received unexpected error:
2026-04-16T00:50:47.7558259Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e0325a1ec945fedc71a07e/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2026-04-16T00:50:47.7559747Z         	Test:       	TestAccSearchIndex_withStoredSourceFalse
2026-04-16T00:50:47.7562147Z         	Messages:   	Cluster creation failed: test-acc-tf-c-6327904172725052274, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e0325a1ec945fedc71a07e/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2026-04-16T00:50:47.7563752Z --- FAIL: TestAccSearchIndex_withStoredSourceFalse (0.94s)
```

- 2026-04-17 PASS 7 seconds
- 2026-04-18 PASS 7 seconds
- 2026-04-19: MISSING
- 2026-04-20 PASS 5 seconds
- 2026-04-21 PASS 9 seconds
- 2026-04-22 PASS 5 seconds
- 2026-04-23 PASS 7 seconds
- 2026-04-24 PASS 8 seconds
- 2026-04-25 PASS 12 seconds
- 2026-04-26: MISSING
- 2026-04-27 PASS 13 seconds
- 2026-04-28 PASS 11 seconds
- 2026-04-29 PASS 11 seconds
- 2026-04-30 PASS 12 seconds
- 2026-05-01 PASS 11 seconds
- 2026-05-02 PASS 13 seconds
- 2026-05-03: MISSING
- 2026-05-04 PASS 14 seconds
- 2026-05-05 PASS 12 seconds
- 2026-05-06 PASS 11 seconds

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 5 seconds
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 7 seconds
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 7 seconds
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 5 seconds
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 12 seconds
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 12 seconds
- 2026-05-04 PASS 11 seconds
- 2026-05-05: MISSING
- 2026-05-06 PASS 12 seconds
