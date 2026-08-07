# network/privatelinkendpointservice/TestAccPrivateLinkEndpointService_deleteOnCreateTimeout Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 28) FAIL(x 4)
Success rate: 87.50%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:58](#error-2026-07-09t0058290000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 93.04s
[2026-07-11 01:10](#error-2026-07-11t0110390000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 107.06s
[2026-07-21 00:52](#error-2026-07-21t0052210000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.09s
[2026-07-23 00:53](#error-2026-07-23t0053540000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.04s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:58:29+00:00
```
2026-07-09T00:58:29.1773291Z === RUN   TestAccPrivateLinkEndpointService_deleteOnCreateTimeout
2026-07-09T00:58:29.1773959Z     resource_test.go:69: Creating execution project (1): test-acc-tf-p-7798205910540919989
2026-07-09T00:58:29.1774494Z     resource_test.go:69: 
2026-07-09T00:58:29.1775444Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:58:29.1777328Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T00:58:29.1779302Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T00:58:29.1781384Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpointservice/resource_test.go:69
2026-07-09T00:58:29.1782270Z         	Error:      	Received unexpected error:
2026-07-09T00:58:29.1784271Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:58:29.1785461Z         	Test:       	TestAccPrivateLinkEndpointService_deleteOnCreateTimeout
2026-07-09T00:58:29.1787358Z         	Messages:   	Project creation failed: test-acc-tf-p-7798205910540919989, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:58:29.1788676Z --- FAIL: TestAccPrivateLinkEndpointService_deleteOnCreateTimeout (93.36s)
```

- 2026-07-10 PASS 3 minutes
- 2026-07-11

### Error 2026-07-11T01:10:39+00:00
```
2026-07-11T01:10:39.0817881Z === RUN   TestAccPrivateLinkEndpointService_deleteOnCreateTimeout
2026-07-11T01:10:39.0818585Z     resource_test.go:69: Creating execution project (1): test-acc-tf-p-4395817829398050175
2026-07-11T01:10:39.0819129Z     resource_test.go:69: 
2026-07-11T01:10:39.0820158Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T01:10:39.0822580Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T01:10:39.0824541Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T01:10:39.0826683Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpointservice/resource_test.go:69
2026-07-11T01:10:39.0828278Z         	Error:      	Received unexpected error:
2026-07-11T01:10:39.0830684Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T01:10:39.0831945Z         	Test:       	TestAccPrivateLinkEndpointService_deleteOnCreateTimeout
2026-07-11T01:10:39.0833921Z         	Messages:   	Project creation failed: test-acc-tf-p-4395817829398050175, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T01:10:39.0835284Z --- FAIL: TestAccPrivateLinkEndpointService_deleteOnCreateTimeout (107.64s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 4 minutes
- 2026-07-14 PASS 3 minutes
- 2026-07-15 PASS 4 minutes
- 2026-07-16 PASS 5 minutes
- 2026-07-17 PASS 3 minutes
- 2026-07-18 PASS 4 minutes
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:52:21+00:00
```
2026-07-21T00:52:21.4559835Z === RUN   TestAccPrivateLinkEndpointService_deleteOnCreateTimeout
2026-07-21T00:52:21.4560505Z     resource_test.go:69: Creating execution project (1): test-acc-tf-p-3407841254397930447
2026-07-21T00:52:21.4561034Z     resource_test.go:69: 
2026-07-21T00:52:21.4561984Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:52:21.4564237Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:52:21.4566230Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:52:21.4568315Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpointservice/resource_test.go:69
2026-07-21T00:52:21.4569207Z         	Error:      	Received unexpected error:
2026-07-21T00:52:21.4571449Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:52:21.4572653Z         	Test:       	TestAccPrivateLinkEndpointService_deleteOnCreateTimeout
2026-07-21T00:52:21.4574965Z         	Messages:   	Project creation failed: test-acc-tf-p-3407841254397930447, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:52:21.4576317Z --- FAIL: TestAccPrivateLinkEndpointService_deleteOnCreateTimeout (61.91s)
```

- 2026-07-22 PASS 3 minutes
- 2026-07-23

### Error 2026-07-23T00:53:54+00:00
```
2026-07-23T00:53:54.2524793Z === RUN   TestAccPrivateLinkEndpointService_deleteOnCreateTimeout
2026-07-23T00:53:54.2525484Z     resource_test.go:69: Creating execution project (1): test-acc-tf-p-4181468982704619432
2026-07-23T00:53:54.2526025Z     resource_test.go:69: 
2026-07-23T00:53:54.2526997Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:53:54.2528834Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T00:53:54.2530670Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T00:53:54.2532688Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpointservice/resource_test.go:69
2026-07-23T00:53:54.2533787Z         	Error:      	Received unexpected error:
2026-07-23T00:53:54.2536828Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:53:54.2538325Z         	Test:       	TestAccPrivateLinkEndpointService_deleteOnCreateTimeout
2026-07-23T00:53:54.2540779Z         	Messages:   	Project creation failed: test-acc-tf-p-4181468982704619432, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:53:54.2542374Z --- FAIL: TestAccPrivateLinkEndpointService_deleteOnCreateTimeout (0.38s)
```

- 2026-07-24 PASS 3 minutes
- 2026-07-25 PASS 3 minutes
- 2026-07-26: MISSING
- 2026-07-27 PASS 3 minutes
- 2026-07-28 PASS 3 minutes
- 2026-07-29 PASS 3 minutes
- 2026-07-30 PASS 3 minutes
- 2026-07-31 PASS 3 minutes
- 2026-08-01 PASS 5 minutes
- 2026-08-02: MISSING
- 2026-08-03 PASS 3 minutes
- 2026-08-04 PASS 3 minutes
- 2026-08-05 PASS 3 minutes
- 2026-08-06 PASS 3 minutes
- 2026-08-07 PASS 3 minutes

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 4 minutes
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 4 minutes
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 4 minutes
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 4 minutes
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 4 minutes
  - PASS 4 minutes
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 3 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
