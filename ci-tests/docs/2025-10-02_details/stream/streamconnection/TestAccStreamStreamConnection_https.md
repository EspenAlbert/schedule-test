# stream/streamconnection/TestAccStreamStreamConnection_https Test Details
# Found 47 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 41) FAIL(x 6)
Success rate: 87.23%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-07 00:50](#error-2025-09-07t0050490000) | STREAM_TENANT_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/68bcd1d5df5af52d2d4d5831/streams/test-acc-tf-s-4047930990064627307/connections | qa |  | 0.10s
[2025-09-08 09:53](#error-2025-09-08t0953420000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68bea2b5341d8a49877630ee/streams/test-acc-tf-s-1822128021936268327/connections | qa | flaky_500 | 32.03s
[2025-09-14 00:45](#error-2025-09-14t0045380000) | STREAM_TENANT_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/68c60c43d444485797b214ed/streams/test-acc-tf-s-1571941844326212806/connections | qa |  | 0.09s
[2025-09-15 06:36](#error-2025-09-15t0636280000) | STREAM_TENANT_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/68c7b04bfe60767b7f9b139f/streams/test-acc-tf-s-5005804337291291222/connections | qa | flaky_500 | 1.00s
[2025-09-22 00:50](#error-2025-09-22t0050090000) |  | dev |  | 4.04s
[2025-09-26 00:48](#error-2025-09-26t0048160000) |  | dev |  | 3.06s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 6 seconds
- 2025-09-04 PASS 7 seconds
- 2025-09-05 PASS 9 seconds
- 2025-09-06 PASS 9 seconds
- 2025-09-07

### Error 2025-09-07T00:50:49+00:00
```
2025-09-07T00:50:49.0134637Z === RUN   TestAccStreamStreamConnection_https
2025-09-07T00:50:49.0139566Z === CONT  TestAccStreamStreamConnection_https
2025-09-07T00:50:49.0152529Z    test_name=TestAccStreamStreamConnection_https test_terraform_path=/home/runner/work/_temp/4f895247-4d79-45c5-ba85-d71e6b632802/terraform
2025-09-07T00:50:49.0153374Z     resource_stream_connection_test.go:257: Step 1/4 error: Error running apply: exit status 1
2025-09-07T00:50:49.0153800Z         
2025-09-07T00:50:49.0154077Z         Error: error creating resource
2025-09-07T00:50:49.0154461Z         
2025-09-07T00:50:49.0154798Z           with mongodbatlas_stream_connection.test,
2025-09-07T00:50:49.0155462Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_connection" "test":
2025-09-07T00:50:49.0156383Z           12: 		resource "mongodbatlas_stream_connection" "test" {
2025-09-07T00:50:49.0156708Z         
2025-09-07T00:50:49.0157490Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bcd1d5df5af52d2d4d5831/streams/test-acc-tf-s-4047930990064627307/connections
2025-09-07T00:50:49.0158328Z         POST: HTTP 404 Not Found (Error code: "STREAM_TENANT_NOT_FOUND_FOR_NAME")
2025-09-07T00:50:49.0158924Z         Detail: Stream instance for project 68bcd1d5df5af52d2d4d5831 and name
2025-09-07T00:50:49.0159542Z         test-acc-tf-s-4047930990064627307 not found. Reason: Not Found. Params:
2025-09-07T00:50:49.0160111Z         [68bcd1d5df5af52d2d4d5831 test-acc-tf-s-4047930990064627307],
2025-09-07T00:50:49.0160510Z         BadRequestDetail: 
2025-09-07T00:50:49.0184182Z    test_terraform_path=/home/runner/work/_temp/4f895247-4d79-45c5-ba85-d71e6b632802/terraform test_working_directory=/tmp/plugintest2387094256 test_step_number=1 test_name=TestAccStreamRSStreamConnection_kafkaSSL
2025-09-07T00:50:49.0226380Z --- FAIL: TestAccStreamStreamConnection_https (0.95s)
```

- 2025-09-08
  - PASS 8 seconds
  - FAIL 32 seconds

### Error 2025-09-08T09:53:42+00:00
```
2025-09-08T09:53:42.3758420Z === RUN   TestAccStreamStreamConnection_https
2025-09-08T09:53:42.3765944Z === CONT  TestAccStreamStreamConnection_https
2025-09-08T09:53:42.3788994Z === NAME  TestAccStreamStreamConnection_https
2025-09-08T09:53:42.3789975Z     resource_stream_connection_test.go:257: Step 1/4 error: Error running apply: exit status 1
2025-09-08T09:53:42.3790700Z         
2025-09-08T09:53:42.3791164Z         Error: error creating resource
2025-09-08T09:53:42.3791612Z         
2025-09-08T09:53:42.3792180Z           with mongodbatlas_stream_connection.test,
2025-09-08T09:53:42.3793336Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_connection" "test":
2025-09-08T09:53:42.3794382Z           12: 		resource "mongodbatlas_stream_connection" "test" {
2025-09-08T09:53:42.3794908Z         
2025-09-08T09:53:42.3796246Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bea2b5341d8a49877630ee/streams/test-acc-tf-s-1822128021936268327/connections
2025-09-08T09:53:42.3797719Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-08T09:53:42.3798888Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-08T09:53:42.3799548Z         BadRequestDetail: 
2025-09-08T09:53:42.3800244Z --- FAIL: TestAccStreamStreamConnection_https (32.28s)
```

  - PASS 6 seconds
- 2025-09-09 PASS 6 seconds
- 2025-09-10 PASS 7 seconds
- 2025-09-11 PASS 8 seconds
- 2025-09-12
  - PASS 8 seconds
  - PASS 6 seconds
- 2025-09-13 PASS 9 seconds
- 2025-09-14

### Error 2025-09-14T00:45:38+00:00
```
2025-09-14T00:45:38.7897559Z === RUN   TestAccStreamStreamConnection_https
2025-09-14T00:45:38.7902053Z === CONT  TestAccStreamStreamConnection_https
2025-09-14T00:45:38.7959033Z === NAME  TestAccStreamStreamConnection_https
2025-09-14T00:45:38.7959582Z     resource_stream_connection_test.go:257: Step 1/4 error: Error running apply: exit status 1
2025-09-14T00:45:38.7959997Z         
2025-09-14T00:45:38.7960264Z         Error: error creating resource
2025-09-14T00:45:38.7960526Z         
2025-09-14T00:45:38.7960850Z           with mongodbatlas_stream_connection.test,
2025-09-14T00:45:38.7961503Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_connection" "test":
2025-09-14T00:45:38.7962096Z           12: 		resource "mongodbatlas_stream_connection" "test" {
2025-09-14T00:45:38.7962400Z         
2025-09-14T00:45:38.7963146Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c60c43d444485797b214ed/streams/test-acc-tf-s-1571941844326212806/connections
2025-09-14T00:45:38.7964116Z         POST: HTTP 404 Not Found (Error code: "STREAM_TENANT_NOT_FOUND_FOR_NAME")
2025-09-14T00:45:38.7964708Z         Detail: Stream instance for project 68c60c43d444485797b214ed and name
2025-09-14T00:45:38.7965309Z         test-acc-tf-s-1571941844326212806 not found. Reason: Not Found. Params:
2025-09-14T00:45:38.7965875Z         [68c60c43d444485797b214ed test-acc-tf-s-1571941844326212806],
2025-09-14T00:45:38.7966255Z         BadRequestDetail: 
2025-09-14T00:45:38.8007789Z --- FAIL: TestAccStreamStreamConnection_https (0.91s)
```

- 2025-09-15
  - PASS 6 seconds
  - PASS 8 seconds
  - FAIL a second

### Error 2025-09-15T06:36:28+00:00
```
2025-09-15T06:36:28.0049285Z === RUN   TestAccStreamStreamConnection_https
2025-09-15T06:36:28.0058242Z === CONT  TestAccStreamStreamConnection_https
2025-09-15T06:36:28.0082532Z    test_name=TestAccStreamRSStreamConnection_cluster
2025-09-15T06:36:28.0195268Z === NAME  TestAccStreamStreamConnection_https
2025-09-15T06:36:28.0196162Z     resource_stream_connection_test.go:257: Step 1/4 error: Error running apply: exit status 1
2025-09-15T06:36:28.0196656Z         
2025-09-15T06:36:28.0196975Z         Error: error creating resource
2025-09-15T06:36:28.0197282Z         
2025-09-15T06:36:28.0197665Z           with mongodbatlas_stream_connection.test,
2025-09-15T06:36:28.0198421Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_connection" "test":
2025-09-15T06:36:28.0199128Z           12: 		resource "mongodbatlas_stream_connection" "test" {
2025-09-15T06:36:28.0199493Z         
2025-09-15T06:36:28.0200296Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c7b04bfe60767b7f9b139f/streams/test-acc-tf-s-5005804337291291222/connections
2025-09-15T06:36:28.0201144Z         POST: HTTP 404 Not Found (Error code: "STREAM_TENANT_NOT_FOUND_FOR_NAME")
2025-09-15T06:36:28.0201744Z         Detail: Stream instance for project 68c7b04bfe60767b7f9b139f and name
2025-09-15T06:36:28.0202363Z         test-acc-tf-s-5005804337291291222 not found. Reason: Not Found. Params:
2025-09-15T06:36:28.0203001Z         [68c7b04bfe60767b7f9b139f test-acc-tf-s-5005804337291291222],
2025-09-15T06:36:28.0203722Z         BadRequestDetail: 
2025-09-15T06:36:28.0206082Z --- FAIL: TestAccStreamStreamConnection_https (1.05s)
```

- 2025-09-16 PASS 6 seconds
- 2025-09-17 PASS 8 seconds
- 2025-09-18 PASS 8 seconds
- 2025-09-19 PASS 6 seconds
- 2025-09-20 PASS 6 seconds
- 2025-09-21 PASS 8 seconds
- 2025-09-22

### Error 2025-09-22T00:50:09+00:00
```
2025-09-22T00:50:09.7072707Z === RUN   TestAccStreamStreamConnection_https
2025-09-22T00:50:09.7077299Z === CONT  TestAccStreamStreamConnection_https
2025-09-22T00:50:09.7118235Z === NAME  TestAccStreamStreamConnection_https
2025-09-22T00:50:09.7118810Z     resource_stream_connection_test.go:296: Step 2/4 error: Error running apply: exit status 1
2025-09-22T00:50:09.7119240Z         
2025-09-22T00:50:09.7119511Z         Error: error updating resource
2025-09-22T00:50:09.7120109Z         
2025-09-22T00:50:09.7120756Z           with mongodbatlas_stream_connection.test,
2025-09-22T00:50:09.7121885Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_connection" "test":
2025-09-22T00:50:09.7122524Z           12: 		resource "mongodbatlas_stream_connection" "test" {
2025-09-22T00:50:09.7122841Z         
2025-09-22T00:50:09.7123921Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68d09882e965b05ddeb676c0/streams/test-acc-tf-s-3227416594353979564/connections/ConnectionNameHttps
2025-09-22T00:50:09.7124698Z         PATCH: HTTP 404 Not Found (Error code:
2025-09-22T00:50:09.7125230Z         "STREAM_CONNECTION_NOT_FOUND_FOR_NAME") Detail: Stream connection with name
2025-09-22T00:50:09.7125835Z         ConnectionNameHttps for project 68d09882e965b05ddeb676c0 and name
2025-09-22T00:50:09.7126442Z         test-acc-tf-s-3227416594353979564 not found. Reason: Not Found. Params:
2025-09-22T00:50:09.7127119Z         [ConnectionNameHttps 68d09882e965b05ddeb676c0
2025-09-22T00:50:09.7127583Z         test-acc-tf-s-3227416594353979564], BadRequestDetail: 
2025-09-22T00:50:09.7127962Z --- FAIL: TestAccStreamStreamConnection_https (4.38s)
```

- 2025-09-23 PASS 6 seconds
- 2025-09-24 PASS 6 seconds
- 2025-09-25 PASS 8 seconds
- 2025-09-26

### Error 2025-09-26T00:48:16+00:00
```
2025-09-26T00:48:16.2212321Z === RUN   TestAccStreamStreamConnection_https
2025-09-26T00:48:16.2218290Z === CONT  TestAccStreamStreamConnection_https
2025-09-26T00:48:16.2255671Z === NAME  TestAccStreamStreamConnection_https
2025-09-26T00:48:16.2256263Z     resource_stream_connection_test.go:296: Step 2/4 error: Error running apply: exit status 1
2025-09-26T00:48:16.2256751Z         
2025-09-26T00:48:16.2257042Z         Error: error updating resource
2025-09-26T00:48:16.2257303Z         
2025-09-26T00:48:16.2257669Z           with mongodbatlas_stream_connection.test,
2025-09-26T00:48:16.2258597Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_connection" "test":
2025-09-26T00:48:16.2259254Z           12: 		resource "mongodbatlas_stream_connection" "test" {
2025-09-26T00:48:16.2259562Z         
2025-09-26T00:48:16.2260558Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68d5ddddf8df4c6a73fc333b/streams/test-acc-tf-s-8113659077103869597/connections/ConnectionNameHttps
2025-09-26T00:48:16.2261357Z         PATCH: HTTP 404 Not Found (Error code:
2025-09-26T00:48:16.2261938Z         "STREAM_CONNECTION_NOT_FOUND_FOR_NAME") Detail: Stream connection with name
2025-09-26T00:48:16.2262588Z         ConnectionNameHttps for project 68d5ddddf8df4c6a73fc333b and name
2025-09-26T00:48:16.2263400Z         test-acc-tf-s-8113659077103869597 not found. Reason: Not Found. Params:
2025-09-26T00:48:16.2263939Z         [ConnectionNameHttps 68d5ddddf8df4c6a73fc333b
2025-09-26T00:48:16.2264436Z         test-acc-tf-s-8113659077103869597], BadRequestDetail: 
2025-09-26T00:48:16.2271011Z --- FAIL: TestAccStreamStreamConnection_https (3.55s)
```

- 2025-09-27 PASS 12 seconds
- 2025-09-28 PASS 9 seconds
- 2025-09-29
  - PASS 8 seconds
  - PASS 9 seconds
- 2025-09-30
  - PASS 7 seconds
  - PASS 6 seconds
  - PASS 10 seconds
  - PASS 7 seconds
  - PASS 9 seconds
- 2025-10-01
  - PASS 10 seconds
  - PASS 6 seconds
  - PASS 6 seconds
  - PASS 8 seconds
  - PASS 10 seconds
  - PASS 8 seconds
  - PASS 8 seconds
  - PASS 11 seconds
- 2025-10-02 PASS 6 seconds