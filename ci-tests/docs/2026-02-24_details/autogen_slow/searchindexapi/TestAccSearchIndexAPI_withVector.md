# autogen_slow/searchindexapi/TestAccSearchIndexAPI_withVector Test Details
# Found 31 TestRuns in dev, qa from 2026-01-26 to 2026-02-24 from master branch: 1 unique tests, PASS(x 25) FAIL(x 6)
Success rate: 80.65%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-03 00:42](#error-2026-02-03t0042450000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69814427e3c7fce231800b79/clusters | dev | out_of_capacity | 0.04s
[2026-02-24 01:07](#error-2026-02-24t0107110000) |  | dev | flaky_500 | 3.01s

### Timeline
- 2026-01-25: MISSING
- 2026-01-26 PASS 17 minutes
- 2026-01-27 PASS 11 minutes
- 2026-01-28 PASS 12 minutes
- 2026-01-29 PASS 5 minutes
- 2026-01-30 PASS 9 minutes
- 2026-01-31: MISSING
- 2026-02-01: MISSING
- 2026-02-02: MISSING
- 2026-02-03

### Error 2026-02-03T00:42:45+00:00
```
2026-02-03T00:42:45.4530323Z === RUN   TestAccSearchIndexAPI_withVector
2026-02-03T00:42:45.4531399Z     resource_test.go:140: Creating execution cluster: test-acc-tf-c-5837314638525631719
2026-02-03T00:42:45.4532196Z     resource_test.go:140: 
2026-02-03T00:42:45.4533782Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:46
2026-02-03T00:42:45.4537030Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:203
2026-02-03T00:42:45.4540630Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:140
2026-02-03T00:42:45.4542052Z         	Error:      	Received unexpected error:
2026-02-03T00:42:45.4546604Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups/69814427e3c7fce231800b79/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:42:45.4548945Z         	Test:       	TestAccSearchIndexAPI_withVector
2026-02-03T00:42:45.4552754Z         	Messages:   	Cluster creation failed: test-acc-tf-c-5837314638525631719, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69814427e3c7fce231800b79/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:42:45.4555183Z --- FAIL: TestAccSearchIndexAPI_withVector (0.42s)
```

- 2026-02-04 PASS 5 minutes
- 2026-02-05 PASS 7 minutes
- 2026-02-06 PASS 7 minutes
- 2026-02-07 PASS 16 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS a minute
- 2026-02-10 PASS 6 minutes
- 2026-02-11 PASS a minute
- 2026-02-12 PASS a minute
- 2026-02-13 PASS 12 minutes
- 2026-02-14 PASS a minute
- 2026-02-15: MISSING
- 2026-02-16 PASS 11 minutes
- 2026-02-17 PASS 8 minutes
- 2026-02-18 PASS 6 minutes
- 2026-02-19 PASS 7 minutes
- 2026-02-20 PASS 8 minutes
- 2026-02-21 PASS 5 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS a minute
- 2026-02-24

### Error 2026-02-24T01:07:11+00:00
```
2026-02-24T01:07:11.3753264Z === RUN   TestAccSearchIndexAPI_withVector
2026-02-24T01:07:11.3757134Z === CONT  TestAccSearchIndexAPI_withVector
2026-02-24T01:07:11.3790363Z === NAME  TestAccSearchIndexAPI_withVector
2026-02-24T01:07:11.3790867Z     resource_test.go:143: Step 1/1 error: Error running apply: exit status 1
2026-02-24T01:07:11.3791261Z         
2026-02-24T01:07:11.3791555Z         Error: Error calling API in Create
2026-02-24T01:07:11.3791841Z         
2026-02-24T01:07:11.3792175Z           with mongodbatlas_search_index_api.test,
2026-02-24T01:07:11.3792856Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-02-24T01:07:11.3793775Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-02-24T01:07:11.3794218Z         
2026-02-24T01:07:11.3794693Z         (503 Service Unavailable) failed to decode response body: undefined response
2026-02-24T01:07:11.3795217Z         type
2026-02-24T01:07:11.3804093Z    test_working_directory=/tmp/plugintest3539796038 test_step_number=1 test_terraform_path=/home/runner/work/_temp/cac00275-aef5-443b-ac5b-c1f29c969ce5/terraform test_name=TestAccSearchIndexAPI_withSynonymsUpdatedToEmpty
2026-02-24T01:07:11.3826418Z --- FAIL: TestAccSearchIndexAPI_withVector (3.14s)
```


## QA Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-02-15 01:24](#error-2026-02-15t0124540000) |  | qa | 516.07s
[2026-02-17 16:03](#error-2026-02-17t1603210000) |  | qa | 65.02s
[2026-02-17 20:22](#error-2026-02-17t2022240000) |  | qa | 826.08s
[2026-02-22 01:16](#error-2026-02-22t0116570000) |  | qa | 545.01s

### Timeline
- 2026-01-25: MISSING
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 11 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 7 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 6 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15

### Error 2026-02-15T01:24:54+00:00
```
2026-02-15T01:24:54.1947412Z === RUN   TestAccSearchIndexAPI_withVector
2026-02-15T01:24:54.1951087Z === CONT  TestAccSearchIndexAPI_withVector
2026-02-15T01:24:54.1973970Z === NAME  TestAccSearchIndexAPI_withVector
2026-02-15T01:24:54.1975027Z     resource_test.go:143: Error running post-test destroy, there may be dangling resources: search index (6991166188f4b5b22540066f/test-acc-tf-c-2299255714505639175/699119bb88f4b5b22540792c) still exists
2026-02-15T01:24:54.1975905Z --- FAIL: TestAccSearchIndexAPI_withVector (516.72s)
```

- 2026-02-16: MISSING
- 2026-02-17
  - FAIL a minute

### Error 2026-02-17T16:03:21+00:00
```
2026-02-17T16:03:21.9176693Z === RUN   TestAccSearchIndexAPI_withVector
2026-02-17T16:03:21.9180193Z === CONT  TestAccSearchIndexAPI_withVector
2026-02-17T16:03:21.9186928Z === NAME  TestAccSearchIndexAPI_withVector
2026-02-17T16:03:21.9188221Z     resource_test.go:143: Error running post-test destroy, there may be dangling resources: search index (6994881dc64c45bf0bbad77d/test-acc-tf-c-1519459127951114801/69948b7917482212e330f39e) still exists
2026-02-17T16:03:21.9189097Z --- FAIL: TestAccSearchIndexAPI_withVector (65.21s)
```

  - FAIL 13 minutes

### Error 2026-02-17T20:22:24+00:00
```
2026-02-17T20:22:24.3904188Z === RUN   TestAccSearchIndexAPI_withVector
2026-02-17T20:22:24.3910279Z === CONT  TestAccSearchIndexAPI_withVector
2026-02-17T20:22:24.3944196Z === NAME  TestAccSearchIndexAPI_withVector
2026-02-17T20:22:24.3946082Z     resource_test.go:143: Error running post-test destroy, there may be dangling resources: search index (6994c5a5e3d2a8bb0299cdd0/test-acc-tf-c-3721231508258722541/6994c872e3d2a8bb029a18c5) still exists
2026-02-17T20:22:24.3947597Z --- FAIL: TestAccSearchIndexAPI_withVector (826.81s)
```

- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22

### Error 2026-02-22T01:16:57+00:00
```
2026-02-22T01:16:57.8708644Z === RUN   TestAccSearchIndexAPI_withVector
2026-02-22T01:16:57.8712540Z === CONT  TestAccSearchIndexAPI_withVector
2026-02-22T01:16:57.8731435Z === NAME  TestAccSearchIndexAPI_withVector
2026-02-22T01:16:57.8732515Z     resource_test.go:143: Error running post-test destroy, there may be dangling resources: search index (699a505cc26caab7eb26324b/test-acc-tf-c-8475155293841306936/699a53fc62519b891468fea7) still exists
2026-02-22T01:16:57.8733427Z --- FAIL: TestAccSearchIndexAPI_withVector (545.07s)
```

- 2026-02-23: MISSING
- 2026-02-24: MISSING
