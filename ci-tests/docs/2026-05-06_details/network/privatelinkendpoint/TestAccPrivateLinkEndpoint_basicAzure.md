# network/privatelinkendpoint/TestAccPrivateLinkEndpoint_basicAzure Test Details
# Found 37 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 32) FAIL(x 5)
Success rate: 86.49%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-08 00:55](#error-2026-04-08t0055370000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/69d5a50d74e39a664149495f/privateEndpoint/endpointService | dev |  | 1.03s
[2026-04-09 00:44](#error-2026-04-09t0044320000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/69d6f4ed9bb208aac605fa32/privateEndpoint/endpointService | dev |  | 1.01s
[2026-04-11 00:49](#error-2026-04-11t0049030000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/69d998f992f7ea8dceebf926/privateEndpoint/endpointService | dev |  | 1.01s
[2026-04-30 01:11](#error-2026-04-30t0111180000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 93.04s
[2026-05-05 01:06](#error-2026-05-05t0106290000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 72.08s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS a minute
- 2026-04-08

### Error 2026-04-08T00:55:37+00:00
```
2026-04-08T00:55:37.7174886Z === RUN   TestAccPrivateLinkEndpoint_basicAzure
2026-04-08T00:55:37.7183427Z === CONT  TestAccPrivateLinkEndpoint_basicAzure
2026-04-08T00:55:37.7246329Z === NAME  TestAccPrivateLinkEndpoint_basicAzure
2026-04-08T00:55:37.7247029Z     resource_test.go:61: Step 1/2 error: Error running apply: exit status 1
2026-04-08T00:55:37.7247430Z         
2026-04-08T00:55:37.7249239Z         Error: error creating MongoDB Private Endpoints Connection: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69d5a50d74e39a664149495f/privateEndpoint/endpointService POST: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail: Reason: No Capacity. Reason: Bad Request. Params: [No Capacity], BadRequestDetail: 
2026-04-08T00:55:37.7250515Z         
2026-04-08T00:55:37.7250900Z           with mongodbatlas_privatelink_endpoint.this,
2026-04-08T00:55:37.7251634Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_privatelink_endpoint" "this":
2026-04-08T00:55:37.7252563Z           12: 		resource "mongodbatlas_privatelink_endpoint" "this" {
2026-04-08T00:55:37.7253037Z         
2026-04-08T00:55:37.7254382Z --- FAIL: TestAccPrivateLinkEndpoint_basicAzure (1.30s)
```

- 2026-04-09

### Error 2026-04-09T00:44:32+00:00
```
2026-04-09T00:44:32.8932001Z === RUN   TestAccPrivateLinkEndpoint_basicAzure
2026-04-09T00:44:32.8938429Z === CONT  TestAccPrivateLinkEndpoint_basicAzure
2026-04-09T00:44:32.8955315Z    test_name=TestAccPrivateLinkEndpoint_gcpPortMappingEnabled test_terraform_path=/home/runner/work/_temp/aa1ed3fd-0fd8-4e47-bd94-7669829149a4/terraform test_working_directory=/tmp/plugintest1610013807
2026-04-09T00:44:32.8989637Z === NAME  TestAccPrivateLinkEndpoint_basicAzure
2026-04-09T00:44:32.8990180Z     resource_test.go:61: Step 1/2 error: Error running apply: exit status 1
2026-04-09T00:44:32.8990591Z         
2026-04-09T00:44:32.8992383Z         Error: error creating MongoDB Private Endpoints Connection: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69d6f4ed9bb208aac605fa32/privateEndpoint/endpointService POST: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail: Reason: No Capacity. Reason: Bad Request. Params: [No Capacity], BadRequestDetail: 
2026-04-09T00:44:32.8993627Z         
2026-04-09T00:44:32.8994019Z           with mongodbatlas_privatelink_endpoint.this,
2026-04-09T00:44:32.8995119Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_privatelink_endpoint" "this":
2026-04-09T00:44:32.8995833Z           12: 		resource "mongodbatlas_privatelink_endpoint" "this" {
2026-04-09T00:44:32.8996209Z         
2026-04-09T00:44:32.8997562Z --- FAIL: TestAccPrivateLinkEndpoint_basicAzure (1.07s)
```

- 2026-04-10 PASS a minute
- 2026-04-11

### Error 2026-04-11T00:49:03+00:00
```
2026-04-11T00:49:03.7978326Z === RUN   TestAccPrivateLinkEndpoint_basicAzure
2026-04-11T00:49:03.7984567Z === CONT  TestAccPrivateLinkEndpoint_basicAzure
2026-04-11T00:49:03.8001600Z    test_step_number=1
2026-04-11T00:49:03.8002077Z     resource_test.go:61: Step 1/2 error: Error running apply: exit status 1
2026-04-11T00:49:03.8002490Z         
2026-04-11T00:49:03.8004280Z         Error: error creating MongoDB Private Endpoints Connection: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69d998f992f7ea8dceebf926/privateEndpoint/endpointService POST: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail: Reason: No Capacity. Reason: Bad Request. Params: [No Capacity], BadRequestDetail: 
2026-04-11T00:49:03.8005504Z         
2026-04-11T00:49:03.8005907Z           with mongodbatlas_privatelink_endpoint.this,
2026-04-11T00:49:03.8006655Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_privatelink_endpoint" "this":
2026-04-11T00:49:03.8007360Z           12: 		resource "mongodbatlas_privatelink_endpoint" "this" {
2026-04-11T00:49:03.8007727Z         
2026-04-11T00:49:03.8015075Z    test_terraform_path=/home/runner/work/_temp/35e0278e-6ab2-4ad2-9ae1-26462cebd84a/terraform
2026-04-11T00:49:03.8041993Z --- FAIL: TestAccPrivateLinkEndpoint_basicAzure (1.08s)
```

- 2026-04-12: MISSING
- 2026-04-13 PASS a minute
- 2026-04-14 PASS 2 minutes
- 2026-04-15 PASS a minute
- 2026-04-16 PASS a minute
- 2026-04-17 PASS a minute
- 2026-04-18 PASS a minute
- 2026-04-19: MISSING
- 2026-04-20 PASS a minute
- 2026-04-21 PASS a minute
- 2026-04-22 PASS 33 minutes
- 2026-04-23 PASS a minute
- 2026-04-24 PASS a minute
- 2026-04-25 PASS a minute
- 2026-04-26: MISSING
- 2026-04-27 PASS a minute
- 2026-04-28 PASS a minute
- 2026-04-29 PASS a minute
- 2026-04-30

### Error 2026-04-30T01:11:18+00:00
```
2026-04-30T01:11:18.0727916Z === RUN   TestAccPrivateLinkEndpoint_basicAzure
2026-04-30T01:11:18.0729050Z     resource_test.go:56: Creating execution project (1): test-acc-tf-p-2150484059272893047
2026-04-30T01:11:18.0729997Z     resource_test.go:56: 
2026-04-30T01:11:18.0731744Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-30T01:11:18.0735157Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-30T01:11:18.0738983Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-30T01:11:18.0742819Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpoint/resource_test.go:56
2026-04-30T01:11:18.0744352Z         	Error:      	Received unexpected error:
2026-04-30T01:11:18.0748396Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T01:11:18.0750421Z         	Test:       	TestAccPrivateLinkEndpoint_basicAzure
2026-04-30T01:11:18.0753868Z         	Messages:   	Project creation failed: test-acc-tf-p-2150484059272893047, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T01:11:18.0756440Z --- FAIL: TestAccPrivateLinkEndpoint_basicAzure (93.42s)
```

- 2026-05-01 PASS a minute
- 2026-05-02 PASS a minute
- 2026-05-03: MISSING
- 2026-05-04 PASS a minute
- 2026-05-05

### Error 2026-05-05T01:06:29+00:00
```
2026-05-05T01:06:29.4728469Z === RUN   TestAccPrivateLinkEndpoint_basicAzure
2026-05-05T01:06:29.4729343Z     resource_test.go:56: Creating execution project (1): test-acc-tf-p-8927117528125252089
2026-05-05T01:06:29.4729838Z     resource_test.go:56: 
2026-05-05T01:06:29.4730740Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-05T01:06:29.4732531Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-05T01:06:29.4734577Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-05T01:06:29.4736487Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpoint/resource_test.go:56
2026-05-05T01:06:29.4737301Z         	Error:      	Received unexpected error:
2026-05-05T01:06:29.4739215Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-05T01:06:29.4740273Z         	Test:       	TestAccPrivateLinkEndpoint_basicAzure
2026-05-05T01:06:29.4742041Z         	Messages:   	Project creation failed: test-acc-tf-p-8927117528125252089, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-05T01:06:29.4743570Z --- FAIL: TestAccPrivateLinkEndpoint_basicAzure (72.77s)
```

- 2026-05-06 PASS a minute

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08
  - PASS 2 minutes
  - PASS a minute
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS a minute
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 2 minutes
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS a minute
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 2 minutes
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS a minute
- 2026-05-04
  - PASS 2 minutes
  - PASS a minute
- 2026-05-05 PASS a minute
- 2026-05-06 PASS a minute
