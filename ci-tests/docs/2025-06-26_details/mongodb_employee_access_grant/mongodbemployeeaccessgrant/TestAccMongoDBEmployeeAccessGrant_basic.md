# mongodb_employee_access_grant/mongodbemployeeaccessgrant/TestAccMongoDBEmployeeAccessGrant_basic Test Details
# Found 39 TestRuns in dev, qa from 2025-05-28 to 2025-06-26 from master branch: 1 unique tests, PASS(x 38) FAIL
Success rate: 97.44%

## Timeline
2025-05-27: MISSING
### 2025-05-28
#### PASS 5 seconds
```
2025-05-28T00:47:38.5389963Z === RUN   TestAccMongoDBEmployeeAccessGrant_basic
2025-05-28T00:47:44.2188433Z --- PASS: TestAccMongoDBEmployeeAccessGrant_basic (5.68s)
```
#### PASS 9 seconds
```
2025-05-28T08:46:58.8471803Z === RUN   TestAccMongoDBEmployeeAccessGrant_basic
2025-05-28T08:47:07.8604270Z --- PASS: TestAccMongoDBEmployeeAccessGrant_basic (9.01s)
```
### 2025-05-29
#### PASS 5 seconds
```
2025-05-29T00:46:24.2792984Z === RUN   TestAccMongoDBEmployeeAccessGrant_basic
2025-05-29T00:46:29.6365366Z --- PASS: TestAccMongoDBEmployeeAccessGrant_basic (5.36s)
```
### 2025-05-30
#### PASS 5 seconds
```
2025-05-30T00:45:33.9107437Z === RUN   TestAccMongoDBEmployeeAccessGrant_basic
2025-05-30T00:45:39.4043926Z --- PASS: TestAccMongoDBEmployeeAccessGrant_basic (5.49s)
```
### 2025-05-31
#### PASS 8 seconds
```
2025-05-31T00:45:50.2643111Z === RUN   TestAccMongoDBEmployeeAccessGrant_basic
2025-05-31T00:45:59.1922621Z --- PASS: TestAccMongoDBEmployeeAccessGrant_basic (8.93s)
```
### 2025-06-01
#### PASS 9 seconds
```
2025-06-01T00:48:42.6121191Z === RUN   TestAccMongoDBEmployeeAccessGrant_basic
2025-06-01T00:48:51.9542487Z --- PASS: TestAccMongoDBEmployeeAccessGrant_basic (9.34s)
```
#### PASS 5 seconds
```
2025-06-01T04:57:29.2717511Z === RUN   TestAccMongoDBEmployeeAccessGrant_basic
2025-06-01T04:57:34.9682551Z --- PASS: TestAccMongoDBEmployeeAccessGrant_basic (5.70s)
```
#### PASS 7 seconds
```
2025-06-01T09:07:45.8974003Z === RUN   TestAccMongoDBEmployeeAccessGrant_basic
2025-06-01T09:07:53.3141397Z --- PASS: TestAccMongoDBEmployeeAccessGrant_basic (7.42s)
```
#### PASS 6 seconds
```
2025-06-01T13:18:07.6613556Z === RUN   TestAccMongoDBEmployeeAccessGrant_basic
2025-06-01T13:18:13.8836551Z --- PASS: TestAccMongoDBEmployeeAccessGrant_basic (6.22s)
```
#### PASS 5 seconds
```
2025-06-01T17:26:14.6195212Z === RUN   TestAccMongoDBEmployeeAccessGrant_basic
2025-06-01T17:26:20.5721592Z --- PASS: TestAccMongoDBEmployeeAccessGrant_basic (5.95s)
```
#### PASS 5 seconds
```
2025-06-01T21:34:32.5272865Z === RUN   TestAccMongoDBEmployeeAccessGrant_basic
2025-06-01T21:34:37.7423910Z --- PASS: TestAccMongoDBEmployeeAccessGrant_basic (5.22s)
```
### 2025-06-02
#### PASS 5 seconds
```
2025-06-02T00:47:57.2982052Z === RUN   TestAccMongoDBEmployeeAccessGrant_basic
2025-06-02T00:48:02.4256389Z --- PASS: TestAccMongoDBEmployeeAccessGrant_basic (5.13s)
```
#### PASS 9 seconds
```
2025-06-02T01:44:09.5781149Z === RUN   TestAccMongoDBEmployeeAccessGrant_basic
2025-06-02T01:44:19.1688360Z --- PASS: TestAccMongoDBEmployeeAccessGrant_basic (9.59s)
```
#### PASS 5 seconds
```
2025-06-02T05:59:01.9186146Z === RUN   TestAccMongoDBEmployeeAccessGrant_basic
2025-06-02T05:59:07.5268997Z --- PASS: TestAccMongoDBEmployeeAccessGrant_basic (5.61s)
```
### 2025-06-03
#### PASS 5 seconds
```
2025-06-03T00:46:59.9844086Z === RUN   TestAccMongoDBEmployeeAccessGrant_basic
2025-06-03T00:47:05.2207065Z --- PASS: TestAccMongoDBEmployeeAccessGrant_basic (5.24s)
```
### 2025-06-04
#### PASS 9 seconds
```
2025-06-04T00:38:03.3045207Z === RUN   TestAccMongoDBEmployeeAccessGrant_basic
2025-06-04T00:38:12.8893685Z --- PASS: TestAccMongoDBEmployeeAccessGrant_basic (9.59s)
```
### 2025-06-05
#### FAIL 3 minutes
```
2025-06-05T00:31:42.3250528Z === RUN   TestAccMongoDBEmployeeAccessGrant_basic
2025-06-05T00:31:42.3251527Z     resource_test.go:26: Creating execution cluster: test-acc-tf-c-1899183461254332779
2025-06-05T00:31:42.8441673Z 2025/06/05 00:31:42 [DEBUG] Waiting for state to become: [IDLE]
2025-06-05T00:34:43.0161934Z     resource_test.go:26: 
2025-06-05T00:34:43.0165493Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:48
2025-06-05T00:34:43.0168699Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:112
2025-06-05T00:34:43.0171109Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/mongodbemployeeaccessgrant/resource_test.go:31
2025-06-05T00:34:43.0173246Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/mongodbemployeeaccessgrant/resource_test.go:26
2025-06-05T00:34:43.0174071Z         	Error:      	Received unexpected error:
2025-06-05T00:34:43.0176444Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4b7c939f2741325036d/clusters/test-acc-tf-c-1899183461254332779 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:34:43.0177745Z         	Test:       	TestAccMongoDBEmployeeAccessGrant_basic
2025-06-05T00:34:43.0179982Z         	Messages:   	Cluster creation failed: test-acc-tf-c-1899183461254332779, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4b7c939f2741325036d/clusters/test-acc-tf-c-1899183461254332779 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:34:43.0181410Z --- FAIL: TestAccMongoDBEmployeeAccessGrant_basic (180.69s)
```
### 2025-06-06
#### PASS 5 seconds
```
2025-06-06T00:40:00.4367652Z === RUN   TestAccMongoDBEmployeeAccessGrant_basic
2025-06-06T00:40:05.5874534Z --- PASS: TestAccMongoDBEmployeeAccessGrant_basic (5.15s)
```
### 2025-06-07
#### PASS 7 seconds
```
2025-06-07T00:38:44.8088781Z === RUN   TestAccMongoDBEmployeeAccessGrant_basic
2025-06-07T00:38:52.1969800Z --- PASS: TestAccMongoDBEmployeeAccessGrant_basic (7.39s)
```
### 2025-06-08
#### PASS 5 seconds
```
2025-06-08T00:41:59.4149039Z === RUN   TestAccMongoDBEmployeeAccessGrant_basic
2025-06-08T00:42:04.4205886Z --- PASS: TestAccMongoDBEmployeeAccessGrant_basic (5.01s)
```
### 2025-06-09
#### PASS 9 seconds
```
2025-06-09T00:39:52.9729904Z === RUN   TestAccMongoDBEmployeeAccessGrant_basic
2025-06-09T00:40:02.4242455Z --- PASS: TestAccMongoDBEmployeeAccessGrant_basic (9.45s)
```
### 2025-06-10
#### PASS 9 seconds
```
2025-06-10T00:50:13.1106054Z === RUN   TestAccMongoDBEmployeeAccessGrant_basic
2025-06-10T00:50:22.4123907Z --- PASS: TestAccMongoDBEmployeeAccessGrant_basic (9.30s)
```
### 2025-06-11
#### PASS 9 seconds
```
2025-06-11T00:37:38.3668199Z === RUN   TestAccMongoDBEmployeeAccessGrant_basic
2025-06-11T00:37:47.6697196Z --- PASS: TestAccMongoDBEmployeeAccessGrant_basic (9.30s)
```
#### PASS 5 seconds
```
2025-06-11T07:47:17.9971314Z === RUN   TestAccMongoDBEmployeeAccessGrant_basic
2025-06-11T07:47:23.4166711Z --- PASS: TestAccMongoDBEmployeeAccessGrant_basic (5.42s)
```
### 2025-06-12
#### PASS 5 seconds
```
2025-06-12T00:38:18.5984919Z === RUN   TestAccMongoDBEmployeeAccessGrant_basic
2025-06-12T00:38:23.7867924Z --- PASS: TestAccMongoDBEmployeeAccessGrant_basic (5.19s)
```
### 2025-06-13
#### PASS 9 seconds
```
2025-06-13T00:38:36.8695598Z === RUN   TestAccMongoDBEmployeeAccessGrant_basic
2025-06-13T00:38:46.4462231Z --- PASS: TestAccMongoDBEmployeeAccessGrant_basic (9.58s)
```
### 2025-06-14
#### PASS 8 seconds
```
2025-06-14T00:37:05.0986511Z === RUN   TestAccMongoDBEmployeeAccessGrant_basic
2025-06-14T00:37:13.8231039Z --- PASS: TestAccMongoDBEmployeeAccessGrant_basic (8.72s)
```
### 2025-06-15
#### PASS 5 seconds
```
2025-06-15T00:42:55.1493031Z === RUN   TestAccMongoDBEmployeeAccessGrant_basic
2025-06-15T00:43:00.1616457Z --- PASS: TestAccMongoDBEmployeeAccessGrant_basic (5.01s)
```
### 2025-06-16
#### PASS 6 seconds
```
2025-06-16T00:38:51.2798166Z === RUN   TestAccMongoDBEmployeeAccessGrant_basic
2025-06-16T00:38:57.6130335Z --- PASS: TestAccMongoDBEmployeeAccessGrant_basic (6.33s)
```
### 2025-06-17
#### PASS 5 seconds
```
2025-06-17T00:38:51.6007977Z === RUN   TestAccMongoDBEmployeeAccessGrant_basic
2025-06-17T00:38:56.7430935Z --- PASS: TestAccMongoDBEmployeeAccessGrant_basic (5.14s)
```
### 2025-06-18
#### PASS 9 seconds
```
2025-06-18T00:37:48.0006215Z === RUN   TestAccMongoDBEmployeeAccessGrant_basic
2025-06-18T00:37:57.6445808Z --- PASS: TestAccMongoDBEmployeeAccessGrant_basic (9.64s)
```
### 2025-06-19
#### PASS 9 seconds
```
2025-06-19T00:44:05.1116209Z === RUN   TestAccMongoDBEmployeeAccessGrant_basic
2025-06-19T00:44:14.5103651Z --- PASS: TestAccMongoDBEmployeeAccessGrant_basic (9.40s)
```
### 2025-06-20
#### PASS 9 seconds
```
2025-06-20T00:38:44.0236737Z === RUN   TestAccMongoDBEmployeeAccessGrant_basic
2025-06-20T00:38:53.4541909Z --- PASS: TestAccMongoDBEmployeeAccessGrant_basic (9.43s)
```
### 2025-06-21
#### PASS 5 seconds
```
2025-06-21T00:37:14.5585807Z === RUN   TestAccMongoDBEmployeeAccessGrant_basic
2025-06-21T00:37:20.0708219Z --- PASS: TestAccMongoDBEmployeeAccessGrant_basic (5.51s)
```
### 2025-06-22
#### PASS 5 seconds
```
2025-06-22T00:41:44.8397488Z === RUN   TestAccMongoDBEmployeeAccessGrant_basic
2025-06-22T00:41:49.9121171Z --- PASS: TestAccMongoDBEmployeeAccessGrant_basic (5.07s)
```
### 2025-06-23
#### PASS 5 seconds
```
2025-06-23T00:38:32.9615154Z === RUN   TestAccMongoDBEmployeeAccessGrant_basic
2025-06-23T00:38:38.5815626Z --- PASS: TestAccMongoDBEmployeeAccessGrant_basic (5.62s)
```
### 2025-06-24
#### PASS 9 seconds
```
2025-06-24T00:37:48.9285692Z === RUN   TestAccMongoDBEmployeeAccessGrant_basic
2025-06-24T00:37:58.4259831Z --- PASS: TestAccMongoDBEmployeeAccessGrant_basic (9.50s)
```
### 2025-06-25
#### PASS 5 seconds
```
2025-06-25T00:37:57.4995852Z === RUN   TestAccMongoDBEmployeeAccessGrant_basic
2025-06-25T00:38:02.8735472Z --- PASS: TestAccMongoDBEmployeeAccessGrant_basic (5.37s)
```
### 2025-06-26
#### PASS 5 seconds
```
2025-06-26T00:36:40.1942106Z === RUN   TestAccMongoDBEmployeeAccessGrant_basic
2025-06-26T00:36:45.5513940Z --- PASS: TestAccMongoDBEmployeeAccessGrant_basic (5.36s)
```