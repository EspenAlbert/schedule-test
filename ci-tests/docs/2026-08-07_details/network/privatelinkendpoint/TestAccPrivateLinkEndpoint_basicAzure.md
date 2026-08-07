# network/privatelinkendpoint/TestAccPrivateLinkEndpoint_basicAzure Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 28) FAIL(x 4)
Success rate: 87.50%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:58](#error-2026-07-09t0058290000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.02s
[2026-07-14 01:05](#error-2026-07-14t0105410000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 68.01s
[2026-07-21 00:52](#error-2026-07-21t0052210000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 76.04s
[2026-07-23 00:53](#error-2026-07-23t0053540000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.04s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:58:29+00:00
```
2026-07-09T00:58:29.1570785Z === RUN   TestAccPrivateLinkEndpoint_basicAzure
2026-07-09T00:58:29.1571401Z     resource_test.go:56: Creating execution project (1): test-acc-tf-p-6335640802394600187
2026-07-09T00:58:29.1571921Z     resource_test.go:56: 
2026-07-09T00:58:29.1572862Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:58:29.1574729Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T00:58:29.1576585Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T00:58:29.1578693Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpoint/resource_test.go:56
2026-07-09T00:58:29.1579995Z         	Error:      	Received unexpected error:
2026-07-09T00:58:29.1582024Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:58:29.1583127Z         	Test:       	TestAccPrivateLinkEndpoint_basicAzure
2026-07-09T00:58:29.1584953Z         	Messages:   	Project creation failed: test-acc-tf-p-6335640802394600187, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:58:29.1586223Z --- FAIL: TestAccPrivateLinkEndpoint_basicAzure (64.22s)
```

- 2026-07-10 PASS a minute
- 2026-07-11 PASS 2 minutes
- 2026-07-12: MISSING
- 2026-07-13 PASS a minute
- 2026-07-14

### Error 2026-07-14T01:05:41+00:00
```
2026-07-14T01:05:41.8007619Z === RUN   TestAccPrivateLinkEndpoint_basicAzure
2026-07-14T01:05:41.8008369Z     resource_test.go:56: Creating execution project (1): test-acc-tf-p-1486392409311525956
2026-07-14T01:05:41.8009221Z     resource_test.go:56: 
2026-07-14T01:05:41.8010693Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-14T01:05:41.8013766Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-14T01:05:41.8015968Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-14T01:05:41.8018279Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpoint/resource_test.go:56
2026-07-14T01:05:41.8019618Z         	Error:      	Received unexpected error:
2026-07-14T01:05:41.8021974Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-14T01:05:41.8023251Z         	Test:       	TestAccPrivateLinkEndpoint_basicAzure
2026-07-14T01:05:41.8025375Z         	Messages:   	Project creation failed: test-acc-tf-p-1486392409311525956, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-14T01:05:41.8026780Z --- FAIL: TestAccPrivateLinkEndpoint_basicAzure (68.06s)
```

- 2026-07-15 PASS a minute
- 2026-07-16 PASS 2 minutes
- 2026-07-17 PASS a minute
- 2026-07-18 PASS a minute
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:52:21+00:00
```
2026-07-21T00:52:21.4294211Z === RUN   TestAccPrivateLinkEndpoint_basicAzure
2026-07-21T00:52:21.4295319Z     resource_test.go:56: Creating execution project (1): test-acc-tf-p-1499077898306492154
2026-07-21T00:52:21.4296252Z     resource_test.go:56: 
2026-07-21T00:52:21.4297973Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:52:21.4301395Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:52:21.4305071Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:52:21.4308750Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpoint/resource_test.go:56
2026-07-21T00:52:21.4310307Z         	Error:      	Received unexpected error:
2026-07-21T00:52:21.4314200Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:52:21.4316175Z         	Test:       	TestAccPrivateLinkEndpoint_basicAzure
2026-07-21T00:52:21.4319741Z         	Messages:   	Project creation failed: test-acc-tf-p-1499077898306492154, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:52:21.4321949Z --- FAIL: TestAccPrivateLinkEndpoint_basicAzure (76.38s)
```

- 2026-07-22 PASS a minute
- 2026-07-23

### Error 2026-07-23T00:53:54+00:00
```
2026-07-23T00:53:54.2310755Z === RUN   TestAccPrivateLinkEndpoint_basicAzure
2026-07-23T00:53:54.2311390Z     resource_test.go:56: Creating execution project (1): test-acc-tf-p-452702126429720748
2026-07-23T00:53:54.2311941Z     resource_test.go:56: 
2026-07-23T00:53:54.2312910Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:53:54.2314906Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T00:53:54.2316894Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T00:53:54.2318865Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpoint/resource_test.go:56
2026-07-23T00:53:54.2319726Z         	Error:      	Received unexpected error:
2026-07-23T00:53:54.2321748Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:53:54.2322813Z         	Test:       	TestAccPrivateLinkEndpoint_basicAzure
2026-07-23T00:53:54.2324610Z         	Messages:   	Project creation failed: test-acc-tf-p-452702126429720748, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:53:54.2325926Z --- FAIL: TestAccPrivateLinkEndpoint_basicAzure (61.39s)
```

- 2026-07-24 PASS a minute
- 2026-07-25 PASS a minute
- 2026-07-26: MISSING
- 2026-07-27 PASS a minute
- 2026-07-28 PASS a minute
- 2026-07-29 PASS 3 minutes
- 2026-07-30 PASS 2 minutes
- 2026-07-31 PASS 3 minutes
- 2026-08-01 PASS a minute
- 2026-08-02: MISSING
- 2026-08-03 PASS 3 minutes
- 2026-08-04 PASS a minute
- 2026-08-05 PASS a minute
- 2026-08-06 PASS a minute
- 2026-08-07 PASS 2 minutes

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS a minute
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS a minute
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS a minute
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS a minute
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS a minute
  - PASS a minute
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS a minute
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
