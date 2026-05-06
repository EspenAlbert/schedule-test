# autogen_slow/searchindexapi/TestAccSearchIndexAPI_withStoredSourceUpdateSearchType Test Details
# Found 34 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 33) FAIL
Success rate: 97.06%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-16 00:52](#error-2026-04-16t0052020000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69e0326b1ec945fedc72100e/clusters | dev | out_of_capacity | 0.07s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 4 minutes
- 2026-04-08 PASS 6 minutes
- 2026-04-09 PASS 11 minutes
- 2026-04-10 PASS 13 minutes
- 2026-04-11 PASS 10 minutes
- 2026-04-12: MISSING
- 2026-04-13 PASS 5 minutes
- 2026-04-14 PASS 14 minutes
- 2026-04-15 PASS 15 minutes
- 2026-04-16

### Error 2026-04-16T00:52:02+00:00
```
2026-04-16T00:52:02.4027992Z === RUN   TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-04-16T00:52:02.4028462Z     resource_test.go:199: Creating execution cluster: test-acc-tf-c-7737230569511011852
2026-04-16T00:52:02.4028829Z     resource_test.go:199: 
2026-04-16T00:52:02.4029504Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:46
2026-04-16T00:52:02.4030822Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:194
2026-04-16T00:52:02.4032222Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:199
2026-04-16T00:52:02.4032842Z         	Error:      	Received unexpected error:
2026-04-16T00:52:02.4034881Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e0326b1ec945fedc72100e/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2026-04-16T00:52:02.4036024Z         	Test:       	TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-04-16T00:52:02.4037667Z         	Messages:   	Cluster creation failed: test-acc-tf-c-7737230569511011852, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e0326b1ec945fedc72100e/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2026-04-16T00:52:02.4038939Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceUpdateSearchType (0.65s)
```

- 2026-04-17 PASS 17 minutes
- 2026-04-18 PASS 6 minutes
- 2026-04-19: MISSING
- 2026-04-20 PASS 6 minutes
- 2026-04-21 PASS 7 minutes
- 2026-04-22 PASS 16 minutes
- 2026-04-23 PASS 11 minutes
- 2026-04-24 PASS 11 minutes
- 2026-04-25 PASS 5 minutes
- 2026-04-26: MISSING
- 2026-04-27 PASS 16 minutes
- 2026-04-28 PASS 12 minutes
- 2026-04-29 PASS 2 minutes
- 2026-04-30 PASS 10 minutes
- 2026-05-01 PASS 9 minutes
- 2026-05-02 PASS 7 minutes
- 2026-05-03: MISSING
- 2026-05-04 PASS 8 minutes
- 2026-05-05 PASS 9 minutes
- 2026-05-06 PASS 14 minutes

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 14 minutes
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 15 minutes
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 16 minutes
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 16 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 18 minutes
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 20 minutes
- 2026-05-04 PASS 26 minutes
- 2026-05-05: MISSING
- 2026-05-06 PASS 19 minutes
