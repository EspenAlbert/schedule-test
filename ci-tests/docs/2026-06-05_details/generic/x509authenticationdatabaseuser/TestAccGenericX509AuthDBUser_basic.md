# generic/x509authenticationdatabaseuser/TestAccGenericX509AuthDBUser_basic Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 27) FAIL(x 3)
Success rate: 90.00%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 00:58](#error-2026-05-09t0058530000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 72.07s
[2026-05-23 01:02](#error-2026-05-23t0102390000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 66.06s
[2026-06-02 01:24](#error-2026-06-02t0124190000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.00s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS 11 seconds
- 2026-05-08 PASS 5 seconds
- 2026-05-09

### Error 2026-05-09T00:58:53+00:00
```
2026-05-09T00:58:53.2254655Z === RUN   TestAccGenericX509AuthDBUser_basic
2026-05-09T00:58:53.2256298Z     resource_x509_authentication_database_user_test.go:24: Creating execution project (1): test-acc-tf-p-4575668623485998476
2026-05-09T00:58:53.2257719Z     resource_x509_authentication_database_user_test.go:24: 
2026-05-09T00:58:53.2259889Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-09T00:58:53.2263528Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-09T00:58:53.2267053Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-09T00:58:53.2269756Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/x509authenticationdatabaseuser/resource_x509_authentication_database_user_test.go:24
2026-05-09T00:58:53.2270926Z         	Error:      	Received unexpected error:
2026-05-09T00:58:53.2273108Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T00:58:53.2274350Z         	Test:       	TestAccGenericX509AuthDBUser_basic
2026-05-09T00:58:53.2276579Z         	Messages:   	Project creation failed: test-acc-tf-p-4575668623485998476, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T00:58:53.2278051Z --- FAIL: TestAccGenericX509AuthDBUser_basic (72.70s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 4 seconds
- 2026-05-12 PASS 12 seconds
- 2026-05-13 PASS 8 seconds
- 2026-05-14 PASS 12 seconds
- 2026-05-15 PASS 7 seconds
- 2026-05-16 PASS 12 seconds
- 2026-05-17: MISSING
- 2026-05-18 PASS 6 seconds
- 2026-05-19 PASS 13 seconds
- 2026-05-20 PASS 6 seconds
- 2026-05-21 PASS 18 seconds
- 2026-05-22 PASS 7 seconds
- 2026-05-23

### Error 2026-05-23T01:02:39+00:00
```
2026-05-23T01:02:39.2257759Z === RUN   TestAccGenericX509AuthDBUser_basic
2026-05-23T01:02:39.2259312Z     resource_x509_authentication_database_user_test.go:24: Creating execution project (1): test-acc-tf-p-4745006510562965467
2026-05-23T01:02:39.2260437Z     resource_x509_authentication_database_user_test.go:24: 
2026-05-23T01:02:39.2261829Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-23T01:02:39.2264285Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-23T01:02:39.2266545Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-23T01:02:39.2269504Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/x509authenticationdatabaseuser/resource_x509_authentication_database_user_test.go:24
2026-05-23T01:02:39.2270709Z         	Error:      	Received unexpected error:
2026-05-23T01:02:39.2273500Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:02:39.2274671Z         	Test:       	TestAccGenericX509AuthDBUser_basic
2026-05-23T01:02:39.2276763Z         	Messages:   	Project creation failed: test-acc-tf-p-4745006510562965467, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:02:39.2278077Z --- FAIL: TestAccGenericX509AuthDBUser_basic (66.63s)
```

- 2026-05-24: MISSING
- 2026-05-25 PASS 5 seconds
- 2026-05-26 PASS 15 seconds
- 2026-05-27 PASS 6 seconds
- 2026-05-28 PASS a minute
- 2026-05-29 PASS 7 seconds
- 2026-05-30 PASS 47 seconds
- 2026-05-31: MISSING
- 2026-06-01 PASS 6 seconds
- 2026-06-02

### Error 2026-06-02T01:24:19+00:00
```
2026-06-02T01:24:19.0704163Z === RUN   TestAccGenericX509AuthDBUser_basic
2026-06-02T01:24:19.0705395Z     resource_x509_authentication_database_user_test.go:24: Creating execution project (1): test-acc-tf-p-4401062045828531156
2026-06-02T01:24:19.0706226Z     resource_x509_authentication_database_user_test.go:24: 
2026-06-02T01:24:19.0707340Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-06-02T01:24:19.0709521Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-06-02T01:24:19.0711637Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-06-02T01:24:19.0714087Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/x509authenticationdatabaseuser/resource_x509_authentication_database_user_test.go:24
2026-06-02T01:24:19.0715466Z         	Error:      	Received unexpected error:
2026-06-02T01:24:19.0717532Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:24:19.0718695Z         	Test:       	TestAccGenericX509AuthDBUser_basic
2026-06-02T01:24:19.0720580Z         	Messages:   	Project creation failed: test-acc-tf-p-4401062045828531156, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:24:19.0721885Z --- FAIL: TestAccGenericX509AuthDBUser_basic (62.03s)
```

- 2026-06-03 PASS 4 seconds
- 2026-06-04 PASS a minute
- 2026-06-05 PASS 6 seconds

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 5 seconds
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 3 seconds
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 6 seconds
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 8 seconds
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
