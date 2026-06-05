# network/privatelinkendpointservice/TestAccPrivateLinkEndpointService_failedAWS Test Details
# Found 31 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 23) FAIL(x 8)
Success rate: 74.19%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 01:23](#error-2026-05-09t0123390000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.05s
[2026-05-16 01:20](#error-2026-05-16t0120140000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 71.05s
[2026-05-19 01:25](#error-2026-05-19t0125510000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 76.01s
[2026-05-21 01:27](#error-2026-05-21t0127550000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 119.07s
[2026-05-23 01:25](#error-2026-05-23t0125040000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 110.09s
[2026-05-26 02:34](#error-2026-05-26t0234040000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 86.03s
[2026-05-28 01:22](#error-2026-05-28t0122520000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 78.06s
[2026-05-30 01:29](#error-2026-05-30t0129140000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 115.07s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS 7 minutes
  - PASS 6 minutes
- 2026-05-08 PASS 8 minutes
- 2026-05-09

### Error 2026-05-09T01:23:39+00:00
```
2026-05-09T01:23:39.1354681Z === RUN   TestAccPrivateLinkEndpointService_failedAWS
2026-05-09T01:23:39.1355308Z     resource_test.go:54: Creating execution project (1): test-acc-tf-p-4389604558747934931
2026-05-09T01:23:39.1355820Z     resource_test.go:54: 
2026-05-09T01:23:39.1356758Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-09T01:23:39.1358794Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-09T01:23:39.1360684Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-09T01:23:39.1362762Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpointservice/resource_test.go:54
2026-05-09T01:23:39.1363642Z         	Error:      	Received unexpected error:
2026-05-09T01:23:39.1365800Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:23:39.1366924Z         	Test:       	TestAccPrivateLinkEndpointService_failedAWS
2026-05-09T01:23:39.1368914Z         	Messages:   	Project creation failed: test-acc-tf-p-4389604558747934931, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:23:39.1370187Z --- FAIL: TestAccPrivateLinkEndpointService_failedAWS (63.53s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 7 minutes
- 2026-05-12 PASS 6 minutes
- 2026-05-13 PASS 6 minutes
- 2026-05-14 PASS 7 minutes
- 2026-05-15 PASS 7 minutes
- 2026-05-16

### Error 2026-05-16T01:20:14+00:00
```
2026-05-16T01:20:14.0193986Z === RUN   TestAccPrivateLinkEndpointService_failedAWS
2026-05-16T01:20:14.0194610Z     resource_test.go:54: Creating execution project (1): test-acc-tf-p-1441937845706159
2026-05-16T01:20:14.0195124Z     resource_test.go:54: 
2026-05-16T01:20:14.0196090Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-16T01:20:14.0198035Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-16T01:20:14.0200195Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-16T01:20:14.0202473Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpointservice/resource_test.go:54
2026-05-16T01:20:14.0203385Z         	Error:      	Received unexpected error:
2026-05-16T01:20:14.0205453Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T01:20:14.0206607Z         	Test:       	TestAccPrivateLinkEndpointService_failedAWS
2026-05-16T01:20:14.0208499Z         	Messages:   	Project creation failed: test-acc-tf-p-1441937845706159, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T01:20:14.0210064Z --- FAIL: TestAccPrivateLinkEndpointService_failedAWS (71.45s)
```

- 2026-05-17: MISSING
- 2026-05-18 PASS 10 minutes
- 2026-05-19

### Error 2026-05-19T01:25:51+00:00
```
2026-05-19T01:25:51.2114571Z === RUN   TestAccPrivateLinkEndpointService_failedAWS
2026-05-19T01:25:51.2115199Z     resource_test.go:54: Creating execution project (1): test-acc-tf-p-9067807446047674920
2026-05-19T01:25:51.2115723Z     resource_test.go:54: 
2026-05-19T01:25:51.2116943Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-19T01:25:51.2118783Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-19T01:25:51.2120758Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-19T01:25:51.2122767Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpointservice/resource_test.go:54
2026-05-19T01:25:51.2123651Z         	Error:      	Received unexpected error:
2026-05-19T01:25:51.2125605Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:25:51.2126949Z         	Test:       	TestAccPrivateLinkEndpointService_failedAWS
2026-05-19T01:25:51.2128773Z         	Messages:   	Project creation failed: test-acc-tf-p-9067807446047674920, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:25:51.2130051Z --- FAIL: TestAccPrivateLinkEndpointService_failedAWS (76.07s)
```

- 2026-05-20 PASS 6 minutes
- 2026-05-21

### Error 2026-05-21T01:27:55+00:00
```
2026-05-21T01:27:55.4995405Z === RUN   TestAccPrivateLinkEndpointService_failedAWS
2026-05-21T01:27:55.4996396Z     resource_test.go:54: Creating execution project (1): test-acc-tf-p-3781387331898736750
2026-05-21T01:27:55.4997568Z     resource_test.go:54: 
2026-05-21T01:27:55.4998573Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-21T01:27:55.5000651Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-21T01:27:55.5002492Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-21T01:27:55.5004534Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpointservice/resource_test.go:54
2026-05-21T01:27:55.5005409Z         	Error:      	Received unexpected error:
2026-05-21T01:27:55.5007537Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:27:55.5008634Z         	Test:       	TestAccPrivateLinkEndpointService_failedAWS
2026-05-21T01:27:55.5010438Z         	Messages:   	Project creation failed: test-acc-tf-p-3781387331898736750, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:27:55.5011634Z --- FAIL: TestAccPrivateLinkEndpointService_failedAWS (119.66s)
```

- 2026-05-22 PASS 6 minutes
- 2026-05-23

### Error 2026-05-23T01:25:04+00:00
```
2026-05-23T01:25:04.2467116Z === RUN   TestAccPrivateLinkEndpointService_failedAWS
2026-05-23T01:25:04.2468109Z     resource_test.go:54: Creating execution project (1): test-acc-tf-p-1535170887596066649
2026-05-23T01:25:04.2468919Z     resource_test.go:54: 
2026-05-23T01:25:04.2470424Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-23T01:25:04.2473417Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-23T01:25:04.2476593Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-23T01:25:04.2480124Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpointservice/resource_test.go:54
2026-05-23T01:25:04.2481557Z         	Error:      	Received unexpected error:
2026-05-23T01:25:04.2484906Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:25:04.2486679Z         	Test:       	TestAccPrivateLinkEndpointService_failedAWS
2026-05-23T01:25:04.2489636Z         	Messages:   	Project creation failed: test-acc-tf-p-1535170887596066649, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:25:04.2491651Z --- FAIL: TestAccPrivateLinkEndpointService_failedAWS (110.87s)
```

- 2026-05-24: MISSING
- 2026-05-25 PASS 7 minutes
- 2026-05-26

### Error 2026-05-26T02:34:04+00:00
```
2026-05-26T02:34:04.3419370Z === RUN   TestAccPrivateLinkEndpointService_failedAWS
2026-05-26T02:34:04.3420448Z     resource_test.go:54: Creating execution project (1): test-acc-tf-p-7462578942401825503
2026-05-26T02:34:04.3421346Z     resource_test.go:54: 
2026-05-26T02:34:04.3423004Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-26T02:34:04.3426493Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-26T02:34:04.3429805Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-26T02:34:04.3433349Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpointservice/resource_test.go:54
2026-05-26T02:34:04.3435000Z         	Error:      	Received unexpected error:
2026-05-26T02:34:04.3438495Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-26T02:34:04.3440428Z         	Test:       	TestAccPrivateLinkEndpointService_failedAWS
2026-05-26T02:34:04.3443546Z         	Messages:   	Project creation failed: test-acc-tf-p-7462578942401825503, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-26T02:34:04.3445758Z --- FAIL: TestAccPrivateLinkEndpointService_failedAWS (86.34s)
```

- 2026-05-27 PASS 6 minutes
- 2026-05-28

### Error 2026-05-28T01:22:52+00:00
```
2026-05-28T01:22:52.4188935Z === RUN   TestAccPrivateLinkEndpointService_failedAWS
2026-05-28T01:22:52.4189536Z     resource_test.go:54: Creating execution project (1): test-acc-tf-p-508130532747176928
2026-05-28T01:22:52.4189964Z     resource_test.go:54: 
2026-05-28T01:22:52.4190705Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T01:22:52.4192100Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T01:22:52.4193630Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T01:22:52.4195161Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpointservice/resource_test.go:54
2026-05-28T01:22:52.4195850Z         	Error:      	Received unexpected error:
2026-05-28T01:22:52.4197378Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T01:22:52.4198232Z         	Test:       	TestAccPrivateLinkEndpointService_failedAWS
2026-05-28T01:22:52.4199608Z         	Messages:   	Project creation failed: test-acc-tf-p-508130532747176928, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T01:22:52.4200542Z --- FAIL: TestAccPrivateLinkEndpointService_failedAWS (78.59s)
```

- 2026-05-29 PASS 6 minutes
- 2026-05-30

### Error 2026-05-30T01:29:14+00:00
```
2026-05-30T01:29:14.4436720Z === RUN   TestAccPrivateLinkEndpointService_failedAWS
2026-05-30T01:29:14.4437427Z     resource_test.go:54: Creating execution project (1): test-acc-tf-p-8208429288271569107
2026-05-30T01:29:14.4437965Z     resource_test.go:54: 
2026-05-30T01:29:14.4438988Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-30T01:29:14.4441222Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-30T01:29:14.4443275Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-30T01:29:14.4445528Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpointservice/resource_test.go:54
2026-05-30T01:29:14.4446437Z         	Error:      	Received unexpected error:
2026-05-30T01:29:14.4448712Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:29:14.4449837Z         	Test:       	TestAccPrivateLinkEndpointService_failedAWS
2026-05-30T01:29:14.4451905Z         	Messages:   	Project creation failed: test-acc-tf-p-8208429288271569107, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:29:14.4453121Z --- FAIL: TestAccPrivateLinkEndpointService_failedAWS (115.68s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS 7 minutes
- 2026-06-02 PASS 6 minutes
- 2026-06-03 PASS 10 minutes
- 2026-06-04 PASS 7 minutes
- 2026-06-05 PASS 6 minutes

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 10 minutes
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 9 minutes
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 9 minutes
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 7 minutes
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
