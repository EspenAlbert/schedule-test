# autogen_fast/privatelinkendpointservicedatafederationonlinearchive/TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_optionalAttrsOmittedAWS Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 27) FAIL(x 5)
Success rate: 84.38%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:57](#error-2026-07-09t0057290000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 107.07s
[2026-07-11 00:54](#error-2026-07-11t0054310000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 91.00s
[2026-07-18 00:50](#error-2026-07-18t0050100000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 109.09s
[2026-07-21 00:53](#error-2026-07-21t0053060000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 107.07s
[2026-07-23 00:48](#error-2026-07-23t0048400000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.02s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:57:29+00:00
```
2026-07-09T00:57:29.6662755Z === RUN   TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_optionalAttrsOmittedAWS
2026-07-09T00:57:29.6663638Z     resource_test.go:179: Creating execution project (1): test-acc-tf-p-2597500078548762750
2026-07-09T00:57:29.6664424Z     resource_test.go:179: 
2026-07-09T00:57:29.6665416Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:57:29.6667415Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T00:57:29.6669707Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T00:57:29.6672096Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/privatelinkendpointservicedatafederationonlinearchive/resource_test.go:179
2026-07-09T00:57:29.6673141Z         	Error:      	Received unexpected error:
2026-07-09T00:57:29.6675173Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:57:29.6676660Z         	Test:       	TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_optionalAttrsOmittedAWS
2026-07-09T00:57:29.6679008Z         	Messages:   	Project creation failed: test-acc-tf-p-2597500078548762750, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:57:29.6680569Z --- FAIL: TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_optionalAttrsOmittedAWS (107.73s)
```

- 2026-07-10 PASS 21 seconds
- 2026-07-11

### Error 2026-07-11T00:54:31+00:00
```
2026-07-11T00:54:31.1738196Z === RUN   TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_optionalAttrsOmittedAWS
2026-07-11T00:54:31.1739113Z     resource_test.go:179: Creating execution project (1): test-acc-tf-p-9163221889060253940
2026-07-11T00:54:31.1739671Z     resource_test.go:179: 
2026-07-11T00:54:31.1740648Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T00:54:31.1742538Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T00:54:31.1744429Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T00:54:31.1746986Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/privatelinkendpointservicedatafederationonlinearchive/resource_test.go:179
2026-07-11T00:54:31.1748087Z         	Error:      	Received unexpected error:
2026-07-11T00:54:31.1750256Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:54:31.1752043Z         	Test:       	TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_optionalAttrsOmittedAWS
2026-07-11T00:54:31.1754152Z         	Messages:   	Project creation failed: test-acc-tf-p-9163221889060253940, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:54:31.1755824Z --- FAIL: TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_optionalAttrsOmittedAWS (91.02s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 21 seconds
- 2026-07-14 PASS 22 seconds
- 2026-07-15 PASS 22 seconds
- 2026-07-16 PASS 22 seconds
- 2026-07-17 PASS 22 seconds
- 2026-07-18

### Error 2026-07-18T00:50:10+00:00
```
2026-07-18T00:50:10.8227854Z === RUN   TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_optionalAttrsOmittedAWS
2026-07-18T00:50:10.8228722Z     resource_test.go:179: Creating execution project (1): test-acc-tf-p-1901476590466002327
2026-07-18T00:50:10.8229338Z     resource_test.go:179: 
2026-07-18T00:50:10.8230273Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-18T00:50:10.8231943Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-18T00:50:10.8233618Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-18T00:50:10.8236068Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/privatelinkendpointservicedatafederationonlinearchive/resource_test.go:179
2026-07-18T00:50:10.8237164Z         	Error:      	Received unexpected error:
2026-07-18T00:50:10.8239063Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:50:10.8240801Z         	Test:       	TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_optionalAttrsOmittedAWS
2026-07-18T00:50:10.8242770Z         	Messages:   	Project creation failed: test-acc-tf-p-1901476590466002327, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:50:10.8244347Z --- FAIL: TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_optionalAttrsOmittedAWS (109.95s)
```

- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:53:06+00:00
```
2026-07-21T00:53:06.0183466Z === RUN   TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_optionalAttrsOmittedAWS
2026-07-21T00:53:06.0184698Z     resource_test.go:179: Creating execution project (1): test-acc-tf-p-7079201617781845971
2026-07-21T00:53:06.0185497Z     resource_test.go:179: 
2026-07-21T00:53:06.0186513Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:53:06.0188401Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:53:06.0190291Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:53:06.0192670Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/privatelinkendpointservicedatafederationonlinearchive/resource_test.go:179
2026-07-21T00:53:06.0193746Z         	Error:      	Received unexpected error:
2026-07-21T00:53:06.0195971Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:53:06.0197465Z         	Test:       	TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_optionalAttrsOmittedAWS
2026-07-21T00:53:06.0199566Z         	Messages:   	Project creation failed: test-acc-tf-p-7079201617781845971, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:53:06.0201061Z --- FAIL: TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_optionalAttrsOmittedAWS (107.70s)
```

- 2026-07-22 PASS 22 seconds
- 2026-07-23

### Error 2026-07-23T00:48:40+00:00
```
2026-07-23T00:48:40.8464002Z === RUN   TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_optionalAttrsOmittedAWS
2026-07-23T00:48:40.8464710Z     resource_test.go:179: Creating execution project (1): test-acc-tf-p-3789909697057151934
2026-07-23T00:48:40.8465166Z     resource_test.go:179: 
2026-07-23T00:48:40.8466081Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:48:40.8467507Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T00:48:40.8468929Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T00:48:40.8470721Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/privatelinkendpointservicedatafederationonlinearchive/resource_test.go:179
2026-07-23T00:48:40.8471544Z         	Error:      	Received unexpected error:
2026-07-23T00:48:40.8474039Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:48:40.8475460Z         	Test:       	TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_optionalAttrsOmittedAWS
2026-07-23T00:48:40.8477525Z         	Messages:   	Project creation failed: test-acc-tf-p-3789909697057151934, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:48:40.8478968Z --- FAIL: TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_optionalAttrsOmittedAWS (0.22s)
```

- 2026-07-24 PASS 21 seconds
- 2026-07-25 PASS 21 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 22 seconds
- 2026-07-28 PASS 21 seconds
- 2026-07-29 PASS 21 seconds
- 2026-07-30 PASS 21 seconds
- 2026-07-31 PASS 21 seconds
- 2026-08-01 PASS 21 seconds
- 2026-08-02: MISSING
- 2026-08-03 PASS 21 seconds
- 2026-08-04 PASS 21 seconds
- 2026-08-05 PASS 21 seconds
- 2026-08-06 PASS 21 seconds
- 2026-08-07 PASS 21 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 22 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 22 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 21 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 22 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 21 seconds
  - PASS 38 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 22 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
