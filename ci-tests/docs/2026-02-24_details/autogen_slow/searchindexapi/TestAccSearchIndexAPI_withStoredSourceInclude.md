# autogen_slow/searchindexapi/TestAccSearchIndexAPI_withStoredSourceInclude Test Details
# Found 31 TestRuns in dev, qa from 2026-01-26 to 2026-02-24 from master branch: 1 unique tests, PASS(x 25) FAIL(x 6)
Success rate: 80.65%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-03 00:42](#error-2026-02-03t0042450000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69814427e3c7fce231800b79/clusters | dev | out_of_capacity | 0.04s
[2026-02-24 01:07](#error-2026-02-24t0107110000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/699cf2eb8dfec41eaa864f4d/clusters/test-acc-tf-c-2207206617986808029/search/indexes | dev |  | 5.07s

### Timeline
- 2026-01-25: MISSING
- 2026-01-26 PASS 9 minutes
- 2026-01-27 PASS 10 minutes
- 2026-01-28 PASS 15 minutes
- 2026-01-29 PASS 7 minutes
- 2026-01-30 PASS 7 minutes
- 2026-01-31: MISSING
- 2026-02-01: MISSING
- 2026-02-02: MISSING
- 2026-02-03

### Error 2026-02-03T00:42:45+00:00
```
2026-02-03T00:42:45.4581784Z === RUN   TestAccSearchIndexAPI_withStoredSourceInclude
2026-02-03T00:42:45.4582756Z     resource_test.go:180: Creating execution cluster: test-acc-tf-c-4304711000574500842
2026-02-03T00:42:45.4583556Z     resource_test.go:180: 
2026-02-03T00:42:45.4585143Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:46
2026-02-03T00:42:45.4588511Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:203
2026-02-03T00:42:45.4592132Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:180
2026-02-03T00:42:45.4593550Z         	Error:      	Received unexpected error:
2026-02-03T00:42:45.4598378Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups/69814427e3c7fce231800b79/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:42:45.4600721Z         	Test:       	TestAccSearchIndexAPI_withStoredSourceInclude
2026-02-03T00:42:45.4604612Z         	Messages:   	Cluster creation failed: test-acc-tf-c-4304711000574500842, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69814427e3c7fce231800b79/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:42:45.4607191Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceInclude (0.43s)
```

- 2026-02-04 PASS 4 minutes
- 2026-02-05 PASS 7 minutes
- 2026-02-06 PASS 7 minutes
- 2026-02-07 PASS 4 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 17 minutes
- 2026-02-10 PASS 5 minutes
- 2026-02-11 PASS 11 minutes
- 2026-02-12 PASS 11 minutes
- 2026-02-13 PASS 18 minutes
- 2026-02-14 PASS 19 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 10 minutes
- 2026-02-17 PASS 8 minutes
- 2026-02-18 PASS 9 minutes
- 2026-02-19 PASS 2 minutes
- 2026-02-20 PASS 14 minutes
- 2026-02-21 PASS 14 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 9 minutes
- 2026-02-24

### Error 2026-02-24T01:07:11+00:00
```
2026-02-24T01:07:11.3754832Z === RUN   TestAccSearchIndexAPI_withStoredSourceInclude
2026-02-24T01:07:11.3758944Z === CONT  TestAccSearchIndexAPI_withStoredSourceInclude
2026-02-24T01:07:11.3909786Z === NAME  TestAccSearchIndexAPI_withStoredSourceInclude
2026-02-24T01:07:11.3910320Z     resource_test.go:183: Step 1/1 error: Error running apply: exit status 1
2026-02-24T01:07:11.3910704Z         
2026-02-24T01:07:11.3911129Z         Error: Error calling API in Create
2026-02-24T01:07:11.3911425Z         
2026-02-24T01:07:11.3911761Z           with mongodbatlas_search_index_api.test,
2026-02-24T01:07:11.3912548Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-02-24T01:07:11.3913190Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-02-24T01:07:11.3913524Z         
2026-02-24T01:07:11.3914313Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/699cf2eb8dfec41eaa864f4d/clusters/test-acc-tf-c-2207206617986808029/search/indexes
2026-02-24T01:07:11.3915205Z         POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND")
2026-02-24T01:07:11.3916071Z         Detail: Collection listingsAndReviews was not found. Reason: Bad Request.
2026-02-24T01:07:11.3916632Z         Params: [listingsAndReviews], BadRequestDetail: 
2026-02-24T01:07:11.3917060Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceInclude (5.74s)
```


## QA Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-02-15 01:24](#error-2026-02-15t0124540000) |  | qa | 676.06s
[2026-02-17 16:03](#error-2026-02-17t1603210000) |  | qa | 225.07s
[2026-02-17 20:22](#error-2026-02-17t2022240000) |  | qa | 506.06s
[2026-02-22 01:16](#error-2026-02-22t0116570000) |  | qa | 665.03s

### Timeline
- 2026-01-25: MISSING
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 5 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 11 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 3 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15

### Error 2026-02-15T01:24:54+00:00
```
2026-02-15T01:24:54.1949091Z === RUN   TestAccSearchIndexAPI_withStoredSourceInclude
2026-02-15T01:24:54.1951447Z === CONT  TestAccSearchIndexAPI_withStoredSourceInclude
2026-02-15T01:24:54.1985528Z === NAME  TestAccSearchIndexAPI_withStoredSourceInclude
2026-02-15T01:24:54.1986626Z     resource_test.go:183: Error running post-test destroy, there may be dangling resources: search index (6991166188f4b5b22540066f/test-acc-tf-c-2299255714505639175/699119bbcef188b1a572d9e7) still exists
2026-02-15T01:24:54.1987571Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceInclude (676.63s)
```

- 2026-02-16: MISSING
- 2026-02-17
  - FAIL 3 minutes

### Error 2026-02-17T16:03:21+00:00
```
2026-02-17T16:03:21.9178263Z === RUN   TestAccSearchIndexAPI_withStoredSourceInclude
2026-02-17T16:03:21.9182920Z === CONT  TestAccSearchIndexAPI_withStoredSourceInclude
2026-02-17T16:03:21.9192628Z === NAME  TestAccSearchIndexAPI_withStoredSourceInclude
2026-02-17T16:03:21.9193719Z     resource_test.go:183: Error running post-test destroy, there may be dangling resources: search index (6994881dc64c45bf0bbad77d/test-acc-tf-c-1519459127951114801/69948b7917482212e330f396) still exists
2026-02-17T16:03:21.9194633Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceInclude (225.68s)
```

  - FAIL 8 minutes

### Error 2026-02-17T20:22:24+00:00
```
2026-02-17T20:22:24.3906654Z === RUN   TestAccSearchIndexAPI_withStoredSourceInclude
2026-02-17T20:22:24.3911634Z === CONT  TestAccSearchIndexAPI_withStoredSourceInclude
2026-02-17T20:22:24.3922224Z === NAME  TestAccSearchIndexAPI_withStoredSourceInclude
2026-02-17T20:22:24.3924134Z     resource_test.go:183: Error running post-test destroy, there may be dangling resources: search index (6994c5a5e3d2a8bb0299cdd0/test-acc-tf-c-3721231508258722541/6994c872e3d2a8bb029a18cc) still exists
2026-02-17T20:22:24.3925883Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceInclude (506.59s)
```

- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22

### Error 2026-02-22T01:16:57+00:00
```
2026-02-22T01:16:57.8710414Z === RUN   TestAccSearchIndexAPI_withStoredSourceInclude
2026-02-22T01:16:57.8712925Z === CONT  TestAccSearchIndexAPI_withStoredSourceInclude
2026-02-22T01:16:57.8737474Z === NAME  TestAccSearchIndexAPI_withStoredSourceInclude
2026-02-22T01:16:57.8738624Z     resource_test.go:183: Error running post-test destroy, there may be dangling resources: search index (699a505cc26caab7eb26324b/test-acc-tf-c-8475155293841306936/699a53fc62519b891468fea8) still exists
2026-02-22T01:16:57.8739581Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceInclude (665.34s)
```

- 2026-02-23: MISSING
- 2026-02-24: MISSING
