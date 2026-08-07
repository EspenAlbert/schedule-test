# encryption/encryptionatrestprivateendpoint/TestAccEncryptionAtRestPrivateEndpoint_AWS_basic Test Details
# Found 31 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 27) FAIL(x 4)
Success rate: 87.10%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:51](#error-2026-07-09t0051400000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 87.03s
[2026-07-11 00:45](#error-2026-07-11t0045370000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.04s
[2026-07-18 00:44](#error-2026-07-18t0044020000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 76.08s
[2026-07-23 00:57](#error-2026-07-23t0057020000) | CANNOT_ASSUME_ROLE /api/atlas/v2/groups/6a616424a10926eab1f5030a/cloudProviderAccess/6a61657aa10926eab1f63102 | dev |  | 363.04s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:51:40+00:00
```
2026-07-09T00:51:40.9758077Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_AWS_basic
2026-07-09T00:51:40.9758921Z     resource_test.go:174: Creating execution project (1): test-acc-tf-p-2078410259061576751
2026-07-09T00:51:40.9759600Z     resource_test.go:174: 
2026-07-09T00:51:40.9760883Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:51:40.9763240Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T00:51:40.9765554Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T00:51:40.9768150Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/encryptionatrestprivateendpoint/resource_test.go:180
2026-07-09T00:51:40.9771023Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/encryptionatrestprivateendpoint/resource_test.go:174
2026-07-09T00:51:40.9772657Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-09T00:51:40.9773348Z         	Error:      	Received unexpected error:
2026-07-09T00:51:40.9775753Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:51:40.9777157Z         	Test:       	TestAccEncryptionAtRestPrivateEndpoint_AWS_basic
2026-07-09T00:51:40.9779404Z         	Messages:   	Project creation failed: test-acc-tf-p-2078410259061576751, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:51:40.9781105Z --- FAIL: TestAccEncryptionAtRestPrivateEndpoint_AWS_basic (87.29s)
```

- 2026-07-10 PASS 5 minutes
- 2026-07-11

### Error 2026-07-11T00:45:37+00:00
```
2026-07-11T00:45:37.6252496Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_AWS_basic
2026-07-11T00:45:37.6253172Z     resource_test.go:174: Creating execution project (1): test-acc-tf-p-1604753312095352615
2026-07-11T00:45:37.6253727Z     resource_test.go:174: 
2026-07-11T00:45:37.6254852Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T00:45:37.6256760Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T00:45:37.6258810Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T00:45:37.6260900Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/encryptionatrestprivateendpoint/resource_test.go:180
2026-07-11T00:45:37.6263067Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/encryptionatrestprivateendpoint/resource_test.go:174
2026-07-11T00:45:37.6264382Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-11T00:45:37.6264969Z         	Error:      	Received unexpected error:
2026-07-11T00:45:37.6267018Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:45:37.6268346Z         	Test:       	TestAccEncryptionAtRestPrivateEndpoint_AWS_basic
2026-07-11T00:45:37.6270211Z         	Messages:   	Project creation failed: test-acc-tf-p-1604753312095352615, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:45:37.6271514Z --- FAIL: TestAccEncryptionAtRestPrivateEndpoint_AWS_basic (61.41s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 5 minutes
- 2026-07-14: MISSING
- 2026-07-15 PASS 5 minutes
- 2026-07-16 PASS 7 minutes
- 2026-07-17 PASS 5 minutes
- 2026-07-18

### Error 2026-07-18T00:44:02+00:00
```
2026-07-18T00:44:02.7900927Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_AWS_basic
2026-07-18T00:44:02.7902109Z     resource_test.go:174: Creating execution project (1): test-acc-tf-p-487942879630246051
2026-07-18T00:44:02.7902951Z     resource_test.go:174: 
2026-07-18T00:44:02.7904678Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-18T00:44:02.7907838Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-18T00:44:02.7910983Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-18T00:44:02.7914741Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/encryptionatrestprivateendpoint/resource_test.go:180
2026-07-18T00:44:02.7918508Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/encryptionatrestprivateendpoint/resource_test.go:174
2026-07-18T00:44:02.7920715Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-18T00:44:02.7921750Z         	Error:      	Received unexpected error:
2026-07-18T00:44:02.7925180Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:44:02.7927056Z         	Test:       	TestAccEncryptionAtRestPrivateEndpoint_AWS_basic
2026-07-18T00:44:02.7930172Z         	Messages:   	Project creation failed: test-acc-tf-p-487942879630246051, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:44:02.7932206Z --- FAIL: TestAccEncryptionAtRestPrivateEndpoint_AWS_basic (76.80s)
```

- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21 PASS 6 minutes
- 2026-07-22 PASS 5 minutes
- 2026-07-23

### Error 2026-07-23T00:57:02+00:00
```
2026-07-23T00:57:02.8205384Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_AWS_basic
2026-07-23T00:57:02.8209528Z 2026/07/23 00:51:08 warning issue performing authorize: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a616424a10926eab1f5030a/cloudProviderAccess/6a61657aa10926eab1f63102 PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-6182357579291731552). Reason: Bad Request. Params: [arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-6182357579291731552], BadRequestDetail:  
2026-07-23T00:57:02.8212866Z 2026/07/23 00:51:08 retrying
2026-07-23T00:57:02.8236396Z    test_working_directory=/tmp/plugintest3908996119 test_step_number=4 test_name=TestAccEncryptionAtRestPrivateEndpoint_AWS_basic test_terraform_path=/home/runner/work/_temp/c7261a7b-556e-487c-979f-1ac0a564c7ca/terraform
2026-07-23T00:57:02.8239221Z     resource_test.go:174: Error running post-test destroy, there may be dangling resources: exit status 1
2026-07-23T00:57:02.8240148Z         
2026-07-23T00:57:02.8240757Z         Error: error when destroying resource
2026-07-23T00:57:02.8241331Z         
2026-07-23T00:57:02.8242142Z         error deleting Encryption At Rest: (6a616424a10926eab1f5030a):
2026-07-23T00:57:02.8243514Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a616424a10926eab1f5030a/encryptionAtRest
2026-07-23T00:57:02.8244615Z         PATCH: HTTP 400 Bad Request (Error code:
2026-07-23T00:57:02.8245671Z         "CANNOT_DISABLE_ENCRYPTION_AT_REST_DUE_TO_PRIVATE_ENDPOINTS") Detail:
2026-07-23T00:57:02.8246917Z         Encryption at Rest cannot be disabled when private endpoints are present.
2026-07-23T00:57:02.8247986Z         Reason: Bad Request. Params: [], BadRequestDetail: 
2026-07-23T00:57:02.8249082Z --- FAIL: TestAccEncryptionAtRestPrivateEndpoint_AWS_basic (363.35s)
```

- 2026-07-24 PASS 5 minutes
- 2026-07-25 PASS 5 minutes
- 2026-07-26: MISSING
- 2026-07-27 PASS 5 minutes
- 2026-07-28 PASS 6 minutes
- 2026-07-29 PASS 6 minutes
- 2026-07-30 PASS 5 minutes
- 2026-07-31 PASS 5 minutes
- 2026-08-01 PASS 4 minutes
- 2026-08-02: MISSING
- 2026-08-03 PASS 5 minutes
- 2026-08-04 PASS 6 minutes
- 2026-08-05 PASS 5 minutes
- 2026-08-06 PASS 6 minutes
- 2026-08-07 PASS 6 minutes

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 5 minutes
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 6 minutes
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 5 minutes
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 5 minutes
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 6 minutes
  - PASS 6 minutes
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 5 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
