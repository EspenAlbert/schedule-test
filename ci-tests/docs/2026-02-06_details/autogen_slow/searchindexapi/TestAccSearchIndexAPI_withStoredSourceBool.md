# autogen_slow/searchindexapi/TestAccSearchIndexAPI_withStoredSourceBool Test Details
# Found 31 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-03 00:42](#error-2026-02-03t0042450000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69814427e3c7fce231800b79/clusters | dev | out_of_capacity | 0.04s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 16 minutes
- 2026-01-09 PASS 16 minutes
- 2026-01-10 PASS 18 minutes
- 2026-01-11: MISSING
- 2026-01-12 PASS 15 minutes
- 2026-01-13 PASS 16 minutes
- 2026-01-14 PASS 17 minutes
- 2026-01-15 PASS 17 minutes
- 2026-01-16 PASS 15 minutes
- 2026-01-17 PASS 18 minutes
- 2026-01-18: MISSING
- 2026-01-19 PASS 19 minutes
- 2026-01-20 PASS 16 minutes
- 2026-01-21 PASS 18 minutes
- 2026-01-22 PASS 14 minutes
- 2026-01-23 PASS 21 minutes
- 2026-01-24 PASS 19 minutes
- 2026-01-25: MISSING
- 2026-01-26 PASS 22 minutes
- 2026-01-27 PASS 16 minutes
- 2026-01-28 PASS 23 minutes
- 2026-01-29 PASS 14 minutes
- 2026-01-30 PASS 20 minutes
- 2026-01-31: MISSING
- 2026-02-01: MISSING
- 2026-02-02: MISSING
- 2026-02-03

### Error 2026-02-03T00:42:45+00:00
```
2026-02-03T00:42:45.4555820Z === RUN   TestAccSearchIndexAPI_withStoredSourceBool
2026-02-03T00:42:45.4556777Z     resource_test.go:158: Creating execution cluster: test-acc-tf-c-4144947473495397573
2026-02-03T00:42:45.4557564Z     resource_test.go:158: 
2026-02-03T00:42:45.4559298Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:46
2026-02-03T00:42:45.4562536Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:203
2026-02-03T00:42:45.4565985Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:158
2026-02-03T00:42:45.4567387Z         	Error:      	Received unexpected error:
2026-02-03T00:42:45.4572096Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups/69814427e3c7fce231800b79/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:42:45.4574520Z         	Test:       	TestAccSearchIndexAPI_withStoredSourceBool
2026-02-03T00:42:45.4578552Z         	Messages:   	Cluster creation failed: test-acc-tf-c-4144947473495397573, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69814427e3c7fce231800b79/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:42:45.4581069Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceBool (0.41s)
```

- 2026-02-04 PASS 18 minutes
- 2026-02-05 PASS 18 minutes
- 2026-02-06 PASS 25 minutes

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 16 minutes
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 15 minutes
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 14 minutes
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 18 minutes
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 17 minutes
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 17 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 17 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
