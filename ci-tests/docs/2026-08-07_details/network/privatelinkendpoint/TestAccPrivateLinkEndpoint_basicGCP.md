# network/privatelinkendpoint/TestAccPrivateLinkEndpoint_basicGCP Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 28) FAIL(x 4)
Success rate: 87.50%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:58](#error-2026-07-09t0058290000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 82.02s
[2026-07-14 01:05](#error-2026-07-14t0105410000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.06s
[2026-07-21 00:52](#error-2026-07-21t0052210000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 74.06s
[2026-07-23 00:53](#error-2026-07-23t0053540000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.07s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:58:29+00:00
```
2026-07-09T00:58:29.1586655Z === RUN   TestAccPrivateLinkEndpoint_basicGCP
2026-07-09T00:58:29.1587270Z     resource_test.go:83: Creating execution project (1): test-acc-tf-p-703582680448767185
2026-07-09T00:58:29.1587786Z     resource_test.go:83: 
2026-07-09T00:58:29.1588735Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:58:29.1590816Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T00:58:29.1592676Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T00:58:29.1594653Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpoint/resource_test.go:83
2026-07-09T00:58:29.1595518Z         	Error:      	Received unexpected error:
2026-07-09T00:58:29.1597524Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:58:29.1598603Z         	Test:       	TestAccPrivateLinkEndpoint_basicGCP
2026-07-09T00:58:29.1600633Z         	Messages:   	Project creation failed: test-acc-tf-p-703582680448767185, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:58:29.1601899Z --- FAIL: TestAccPrivateLinkEndpoint_basicGCP (82.16s)
```

- 2026-07-10 PASS 8 minutes
- 2026-07-11 PASS 6 minutes
- 2026-07-12: MISSING
- 2026-07-13 PASS 7 minutes
- 2026-07-14

### Error 2026-07-14T01:05:41+00:00
```
2026-07-14T01:05:41.8027296Z === RUN   TestAccPrivateLinkEndpoint_basicGCP
2026-07-14T01:05:41.8028028Z     resource_test.go:83: Creating execution project (1): test-acc-tf-p-7457057283016991416
2026-07-14T01:05:41.8028883Z     resource_test.go:83: 
2026-07-14T01:05:41.8030028Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-14T01:05:41.8032191Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-14T01:05:41.8034329Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-14T01:05:41.8037290Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpoint/resource_test.go:83
2026-07-14T01:05:41.8038318Z         	Error:      	Received unexpected error:
2026-07-14T01:05:41.8040936Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-14T01:05:41.8042211Z         	Test:       	TestAccPrivateLinkEndpoint_basicGCP
2026-07-14T01:05:41.8044310Z         	Messages:   	Project creation failed: test-acc-tf-p-7457057283016991416, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-14T01:05:41.8046322Z --- FAIL: TestAccPrivateLinkEndpoint_basicGCP (62.57s)
```

- 2026-07-15 PASS 8 minutes
- 2026-07-16 PASS 7 minutes
- 2026-07-17 PASS 6 minutes
- 2026-07-18 PASS 9 minutes
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:52:21+00:00
```
2026-07-21T00:52:21.4322678Z === RUN   TestAccPrivateLinkEndpoint_basicGCP
2026-07-21T00:52:21.4323977Z     resource_test.go:83: Creating execution project (1): test-acc-tf-p-9012801242315981782
2026-07-21T00:52:21.4324897Z     resource_test.go:83: 
2026-07-21T00:52:21.4326619Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:52:21.4330098Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:52:21.4333748Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:52:21.4337449Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpoint/resource_test.go:83
2026-07-21T00:52:21.4338992Z         	Error:      	Received unexpected error:
2026-07-21T00:52:21.4342711Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:52:21.4344856Z         	Test:       	TestAccPrivateLinkEndpoint_basicGCP
2026-07-21T00:52:21.4348353Z         	Messages:   	Project creation failed: test-acc-tf-p-9012801242315981782, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:52:21.4350600Z --- FAIL: TestAccPrivateLinkEndpoint_basicGCP (74.59s)
```

- 2026-07-22 PASS 6 minutes
- 2026-07-23

### Error 2026-07-23T00:53:54+00:00
```
2026-07-23T00:53:54.2326372Z === RUN   TestAccPrivateLinkEndpoint_basicGCP
2026-07-23T00:53:54.2326996Z     resource_test.go:83: Creating execution project (1): test-acc-tf-p-2987958188551945900
2026-07-23T00:53:54.2327532Z     resource_test.go:83: 
2026-07-23T00:53:54.2328493Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:53:54.2330348Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T00:53:54.2332194Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T00:53:54.2334148Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpoint/resource_test.go:83
2026-07-23T00:53:54.2335162Z         	Error:      	Received unexpected error:
2026-07-23T00:53:54.2337180Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:53:54.2338241Z         	Test:       	TestAccPrivateLinkEndpoint_basicGCP
2026-07-23T00:53:54.2340021Z         	Messages:   	Project creation failed: test-acc-tf-p-2987958188551945900, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:53:54.2341346Z --- FAIL: TestAccPrivateLinkEndpoint_basicGCP (61.68s)
```

- 2026-07-24 PASS 6 minutes
- 2026-07-25 PASS 6 minutes
- 2026-07-26: MISSING
- 2026-07-27 PASS 6 minutes
- 2026-07-28 PASS 6 minutes
- 2026-07-29 PASS 6 minutes
- 2026-07-30 PASS 6 minutes
- 2026-07-31 PASS 7 minutes
- 2026-08-01 PASS 6 minutes
- 2026-08-02: MISSING
- 2026-08-03 PASS 6 minutes
- 2026-08-04 PASS 6 minutes
- 2026-08-05 PASS 6 minutes
- 2026-08-06 PASS 6 minutes
- 2026-08-07 PASS 7 minutes

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 7 minutes
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 7 minutes
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 8 minutes
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 7 minutes
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 7 minutes
  - PASS 7 minutes
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 7 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
