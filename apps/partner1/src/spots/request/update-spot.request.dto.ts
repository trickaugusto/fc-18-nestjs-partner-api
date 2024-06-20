import { PartialType } from '@nestjs/mapped-types';
import { CreateSpotRequest } from './create-spot.request.dto';

export class UpdateSpotDto extends PartialType(CreateSpotRequest) {}
