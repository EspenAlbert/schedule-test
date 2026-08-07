# autogen_fast/privatelinkendpointservicedatafederationonlinearchive/TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_forceNewEndpointID Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 28) FAIL(x 4)
Success rate: 87.50%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:57](#error-2026-07-09t0057290000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 87.06s
[2026-07-11 00:54](#error-2026-07-11t0054310000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 83.06s
[2026-07-21 00:53](#error-2026-07-21t0053060000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.04s
[2026-07-23 00:48](#error-2026-07-23t0048400000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.03s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:57:29+00:00
```
2026-07-09T00:57:29.6681487Z === RUN   TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_forceNewEndpointID
2026-07-09T00:57:29.6682354Z     resource_test.go:207: Creating execution project (1): test-acc-tf-p-9170582155960213553
2026-07-09T00:57:29.6682914Z     resource_test.go:207: 
2026-07-09T00:57:29.6683885Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:57:29.6685758Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T00:57:29.6687650Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T00:57:29.6690273Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/privatelinkendpointservicedatafederationonlinearchive/resource_test.go:207
2026-07-09T00:57:29.6691325Z         	Error:      	Received unexpected error:
2026-07-09T00:57:29.6693342Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:57:29.6694767Z         	Test:       	TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_forceNewEndpointID
2026-07-09T00:57:29.6696831Z         	Messages:   	Project creation failed: test-acc-tf-p-9170582155960213553, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:57:29.6698311Z --- FAIL: TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_forceNewEndpointID (87.59s)
```

- 2026-07-10 PASS 42 seconds
- 2026-07-11

### Error 2026-07-11T00:54:31+00:00
```
2026-07-11T00:54:31.1756756Z === RUN   TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_forceNewEndpointID
2026-07-11T00:54:31.1757630Z     resource_test.go:207: Creating execution project (1): test-acc-tf-p-5858510151894761981
2026-07-11T00:54:31.1758184Z     resource_test.go:207: 
2026-07-11T00:54:31.1759179Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T00:54:31.1761078Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T00:54:31.1762972Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T00:54:31.1765361Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/privatelinkendpointservicedatafederationonlinearchive/resource_test.go:207
2026-07-11T00:54:31.1766547Z         	Error:      	Received unexpected error:
2026-07-11T00:54:31.1768586Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:54:31.1770042Z         	Test:       	TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_forceNewEndpointID
2026-07-11T00:54:31.1772158Z         	Messages:   	Project creation failed: test-acc-tf-p-5858510151894761981, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:54:31.1773669Z --- FAIL: TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_forceNewEndpointID (83.55s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 42 seconds
- 2026-07-14 PASS 44 seconds
- 2026-07-15 PASS 43 seconds
- 2026-07-16 PASS 44 seconds
- 2026-07-17 PASS 44 seconds
- 2026-07-18 PASS a minute
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:53:06+00:00
```
2026-07-21T00:53:06.0201993Z === RUN   TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_forceNewEndpointID
2026-07-21T00:53:06.0202880Z     resource_test.go:207: Creating execution project (1): test-acc-tf-p-2806210961444515561
2026-07-21T00:53:06.0203454Z     resource_test.go:207: 
2026-07-21T00:53:06.0204656Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:53:06.0206726Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:53:06.0208600Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:53:06.0211148Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/privatelinkendpointservicedatafederationonlinearchive/resource_test.go:207
2026-07-21T00:53:06.0212210Z         	Error:      	Received unexpected error:
2026-07-21T00:53:06.0214283Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:53:06.0215875Z         	Test:       	TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_forceNewEndpointID
2026-07-21T00:53:06.0217920Z         	Messages:   	Project creation failed: test-acc-tf-p-2806210961444515561, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:53:06.0219365Z --- FAIL: TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_forceNewEndpointID (62.36s)
```

- 2026-07-22 PASS 43 seconds
- 2026-07-23

### Error 2026-07-23T00:48:40+00:00
```
2026-07-23T00:48:40.8479694Z === RUN   TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_forceNewEndpointID
2026-07-23T00:48:40.8480384Z     resource_test.go:207: Creating execution project (1): test-acc-tf-p-3969648866102118560
2026-07-23T00:48:40.8480828Z     resource_test.go:207: 
2026-07-23T00:48:40.8481594Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:48:40.8483187Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T00:48:40.8484628Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T00:48:40.8486422Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/privatelinkendpointservicedatafederationonlinearchive/resource_test.go:207
2026-07-23T00:48:40.8487276Z         	Error:      	Received unexpected error:
2026-07-23T00:48:40.8489473Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:48:40.8490848Z         	Test:       	TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_forceNewEndpointID
2026-07-23T00:48:40.8493014Z         	Messages:   	Project creation failed: test-acc-tf-p-3969648866102118560, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:48:40.8494454Z --- FAIL: TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_forceNewEndpointID (0.34s)
```

- 2026-07-24 PASS 42 seconds
- 2026-07-25 PASS 41 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 44 seconds
- 2026-07-28 PASS 42 seconds
- 2026-07-29 PASS 42 seconds
- 2026-07-30 PASS 42 seconds
- 2026-07-31 PASS 42 seconds
- 2026-08-01 PASS 42 seconds
- 2026-08-02: MISSING
- 2026-08-03 PASS 42 seconds
- 2026-08-04 PASS 42 seconds
- 2026-08-05 PASS 42 seconds
- 2026-08-06 PASS 42 seconds
- 2026-08-07 PASS 42 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 44 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 44 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 42 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 44 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 42 seconds
  - PASS 49 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 43 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
