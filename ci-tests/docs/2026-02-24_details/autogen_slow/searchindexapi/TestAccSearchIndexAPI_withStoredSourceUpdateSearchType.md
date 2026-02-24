# autogen_slow/searchindexapi/TestAccSearchIndexAPI_withStoredSourceUpdateSearchType Test Details
# Found 31 TestRuns in dev, qa from 2026-01-26 to 2026-02-24 from master branch: 1 unique tests, PASS(x 25) FAIL(x 6)
Success rate: 80.65%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-03 00:42](#error-2026-02-03t0042450000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69814427e3c7fce231800b79/clusters | dev | out_of_capacity | 0.04s
[2026-02-24 01:07](#error-2026-02-24t0107110000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/699cf2eb8dfec41eaa864f4d/clusters/test-acc-tf-c-2207206617986808029/search/indexes | dev |  | 3.02s

### Timeline
- 2026-01-25: MISSING
- 2026-01-26 PASS 13 minutes
- 2026-01-27 PASS 7 minutes
- 2026-01-28 PASS 6 minutes
- 2026-01-29 PASS 11 minutes
- 2026-01-30 PASS 6 minutes
- 2026-01-31: MISSING
- 2026-02-01: MISSING
- 2026-02-02: MISSING
- 2026-02-03

### Error 2026-02-03T00:42:45+00:00
```
2026-02-03T00:42:45.4607984Z === RUN   TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-02-03T00:42:45.4609152Z     resource_test.go:198: Creating execution cluster: test-acc-tf-c-9146080932484299193
2026-02-03T00:42:45.4609949Z     resource_test.go:198: 
2026-02-03T00:42:45.4611535Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:46
2026-02-03T00:42:45.4614773Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:203
2026-02-03T00:42:45.4618356Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:198
2026-02-03T00:42:45.4619759Z         	Error:      	Received unexpected error:
2026-02-03T00:42:45.4624302Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups/69814427e3c7fce231800b79/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:42:45.4626766Z         	Test:       	TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-02-03T00:42:45.4630851Z         	Messages:   	Cluster creation failed: test-acc-tf-c-9146080932484299193, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69814427e3c7fce231800b79/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:42:45.4633657Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceUpdateSearchType (0.41s)
```

- 2026-02-04 PASS 7 minutes
- 2026-02-05 PASS 6 minutes
- 2026-02-06 PASS 7 minutes
- 2026-02-07 PASS 14 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 9 minutes
- 2026-02-10 PASS 9 minutes
- 2026-02-11 PASS 11 minutes
- 2026-02-12 PASS 10 minutes
- 2026-02-13 PASS 4 minutes
- 2026-02-14 PASS 15 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 5 minutes
- 2026-02-17 PASS 8 minutes
- 2026-02-18 PASS 9 minutes
- 2026-02-19 PASS 2 minutes
- 2026-02-20 PASS 9 minutes
- 2026-02-21 PASS 5 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 20 minutes
- 2026-02-24

### Error 2026-02-24T01:07:11+00:00
```
2026-02-24T01:07:11.3755652Z === RUN   TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-02-24T01:07:11.3759371Z === CONT  TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-02-24T01:07:11.3840838Z === NAME  TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-02-24T01:07:11.3841409Z     resource_test.go:201: Step 1/1 error: Error running apply: exit status 1
2026-02-24T01:07:11.3841803Z         
2026-02-24T01:07:11.3842098Z         Error: Error calling API in Create
2026-02-24T01:07:11.3842384Z         
2026-02-24T01:07:11.3842724Z           with mongodbatlas_search_index_api.test,
2026-02-24T01:07:11.3843390Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-02-24T01:07:11.3844030Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-02-24T01:07:11.3844630Z         
2026-02-24T01:07:11.3845528Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/699cf2eb8dfec41eaa864f4d/clusters/test-acc-tf-c-2207206617986808029/search/indexes
2026-02-24T01:07:11.3846618Z         POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND")
2026-02-24T01:07:11.3847396Z         Detail: Collection listingsAndReviews was not found. Reason: Bad Request.
2026-02-24T01:07:11.3848063Z         Params: [listingsAndReviews], BadRequestDetail: 
2026-02-24T01:07:11.3848637Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceUpdateSearchType (3.25s)
```


## QA Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-02-15 01:24](#error-2026-02-15t0124540000) |  | qa | 516.01s
[2026-02-17 16:03](#error-2026-02-17t1603210000) |  | qa | 639.03s
[2026-02-17 20:22](#error-2026-02-17t2022240000) |  | qa | 827.09s
[2026-02-22 01:16](#error-2026-02-22t0116570000) |  | qa | 504.06s

### Timeline
- 2026-01-25: MISSING
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 4 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 6 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 11 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15

### Error 2026-02-15T01:24:54+00:00
```
2026-02-15T01:24:54.1949916Z === RUN   TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-02-15T01:24:54.1955049Z === CONT  TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-02-15T01:24:54.1967282Z === NAME  TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-02-15T01:24:54.1969000Z     resource_test.go:201: Error running post-test destroy, there may be dangling resources: search index (6991166188f4b5b22540066f/test-acc-tf-c-2299255714505639175/699119bbcef188b1a572d9ed) still exists
2026-02-15T01:24:54.1970125Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceUpdateSearchType (516.09s)
```

- 2026-02-16: MISSING
- 2026-02-17
  - FAIL 10 minutes

### Error 2026-02-17T16:03:21+00:00
```
2026-02-17T16:03:21.9179064Z === RUN   TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-02-17T16:03:21.9182517Z === CONT  TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-02-17T16:03:21.9204285Z === NAME  TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-02-17T16:03:21.9205393Z     resource_test.go:201: Error running post-test destroy, there may be dangling resources: search index (6994881dc64c45bf0bbad77d/test-acc-tf-c-1519459127951114801/69948b7917482212e330f3a4) still exists
2026-02-17T16:03:21.9206338Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceUpdateSearchType (639.32s)
```

  - FAIL 13 minutes

### Error 2026-02-17T20:22:24+00:00
```
2026-02-17T20:22:24.3908092Z === RUN   TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-02-17T20:22:24.3915483Z === CONT  TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-02-17T20:22:24.3954285Z === NAME  TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-02-17T20:22:24.3956283Z     resource_test.go:201: Error running post-test destroy, there may be dangling resources: search index (6994c5a5e3d2a8bb0299cdd0/test-acc-tf-c-3721231508258722541/6994c87198b8813de67e5ca4) still exists
2026-02-17T20:22:24.3957946Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceUpdateSearchType (827.85s)
```

- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22

### Error 2026-02-22T01:16:57+00:00
```
2026-02-22T01:16:57.8711289Z === RUN   TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-02-22T01:16:57.8714049Z === CONT  TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-02-22T01:16:57.8725657Z === NAME  TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-02-22T01:16:57.8726830Z     resource_test.go:201: Error running post-test destroy, there may be dangling resources: search index (699a505cc26caab7eb26324b/test-acc-tf-c-8475155293841306936/699a53fc62519b891468fe9a) still exists
2026-02-22T01:16:57.8727834Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceUpdateSearchType (504.56s)
```

- 2026-02-23: MISSING
- 2026-02-24: MISSING
